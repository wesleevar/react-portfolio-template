import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import React from "react";
import "./Chatbot.css";

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

export default function Chatbot() {
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
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

  const handleSend = async () => {
    if (question.trim() === "") return;
    
    const newMessage = { role: "user", content: question };
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
      const payload = {
        model: "gpt-4o", // You can change this to any OpenAI model
        messages: [
          {
            role: "system",
            content: `You are a personal assistant chatbot that responds to questions about the user's background and experiences. 
            Here is information about the user that you can reference:
            ${USER_BACKGROUND}
            
            Always respond in first person as if you are the user. Keep responses concise and relevant.
            If asked about something not covered in the user background, politely mention that you don't have that information.`
          },
          ...updatedMessages
        ],
        temperature: 0.7,
        max_tokens: 500
      };
      
      // Call OpenAI API
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        console.log("response", response.status, response.json());
        
      }
      const data = await response.json();
      
      if (response.ok) {
        setMessages([
          ...updatedMessages, 
          { role: "assistant", content: data.choices[0].message.content }
        ]);
      } else {
        throw new Error(data.error?.message || "API request failed");
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setMessages([
        ...updatedMessages,
        { 
          role: "assistant", 
          content: "Sorry, I encountered an error processing your request. Please check the API key in your environment variables and try again." 
        }
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
                <div className="message-content">{msg.content}</div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="message assistant">
              <div className="message-content loading">Thinking...</div>
            </div>
          )}
        </div>
        <div className="chatbox-input" onKeyDown={handleKeyPress}>
          <Input
            placeholder="Ask a question about myself or my experience..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <span className={isLoading || question.trim() === "" ? "button-wrapper disabled" : "button-wrapper"}>
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
        </div>
      </div>
    </>
  );
}