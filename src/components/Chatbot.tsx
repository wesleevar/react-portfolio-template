import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function Chatbot() {
  const [question, setQuestion] = useState("");
  // const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (question.trim() === "") return;
    // setMessages([...messages, `You: ${question}`]);
    setQuestion("");
  };

  return (
    <>
      <h2 id="projects">Chatbot</h2>
      <div className="chatbot-container">
        <div className="chatbox">
          <Input
            placeholder="Ask a question about myself or my experience..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </>
  );
}
