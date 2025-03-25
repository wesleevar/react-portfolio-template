import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import React from "react";
import "./Chatbot.css";
import OpenAI from "openai";
import {
  ChatCompletionCreateParamsStreaming,
  ChatCompletionMessageParam,
} from "openai/resources.mjs";

// TODO: replace this with your actual experiences
const USER_BACKGROUND = `
I am a senior at Boston University studying Computer Science.
I worked at Google as a Software Engineer from 2019-2021, focusing on frontend development.
I'm currently working at a fintech startup as a Senior Developer since 2021.
I specialize in React, TypeScript, and Node.js development.
I've built several web applications including an e-commerce platform and a financial dashboard.
I enjoy hiking, photography, and playing the piano in my free time.
I speak English and Italian fluently.
`;

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Chatbot() {
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<Array<ChatCompletionMessageParam>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load saved messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatbot_messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatbot_messages", JSON.stringify(messages));
    }
  }, [messages]);

  const clearMessages = async () => {
    localStorage.setItem("chatbot_messages", JSON.stringify([]));
    setMessages([]);
  };

  const handleSend = async () => {
    if (question.trim() === "") return;

    const newMessage: ChatCompletionMessageParam = {
      role: "user",
      content: question,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setIsLoading(true);
    setQuestion("");

    try {
      // API key from environment variable
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!apiKey) {
        throw new Error("API key not found in environment variables");
      }

      // Create messages payload for OpenAI
      const payload: ChatCompletionCreateParamsStreaming = {
        model: "gpt-4o", // You can change this to any OpenAI model
        messages: [
          {
            role: "system",
            content: `You are a personal assistant chatbot that responds to questions about the user's background and experiences. 
            Here is information about the user that you can reference:
            ${USER_BACKGROUND}
            
            Always respond in first person as if you are the user. Keep responses concise and relevant.
            If asked about something not covered in the user background, politely mention that you don't have that information.`,
          },
          ...updatedMessages,
        ],
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      };

      const stream = await client.chat.completions.create(payload);

      // New message that is currently being streamed
      const assistantMessage: ChatCompletionMessageParam = {
        role: "assistant",
        content: "",
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      for await (const chunk of stream) {
        if (chunk.choices[0].delta.content) {
          assistantMessage.content += chunk.choices[0].delta.content;
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            newMessages[newMessages.length - 1] = { ...assistantMessage };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Sorry, I encountered an error processing your request. Please check the API key in your environment variables and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <h2 id="chatbot">Chatbot</h2>
      <div className="chatbot-container">
        <div className="chatbox-messages">
          {messages.length === 0 ? (
            <div className="empty-state">
              Ask me anything about my background or experience!
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-content">{msg.content?.toString()}</div>
              </div>
            ))
          )}
        </div>
        <div className="chatbox-input" onKeyDown={handleKeyPress}>
          <Input
            placeholder="Enter your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="chatbox-buttons">
            <span
              className={
                isLoading || question.trim() === ""
                  ? "button-wrapper disabled"
                  : "button-wrapper"
              }
            >
              <Button
                onClick={() => {
                  if (!isLoading && question.trim() !== "") {
                    handleSend();
                  }
                }}
              >
                Send
              </Button>
            </span>
            <Button onClick={() => clearMessages()}>Clear</Button>
          </div>
        </div>
      </div>
    </>
  );
}
