import { useState, useRef } from "react";
import "./Chat.css";

const N8N_CHAT_URL =
  "https://taifalsubaie.app.n8n.cloud/webhook/332987d9-6f1f-4160-94d4-610c91fd0feb/chat";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hi! I'm your cooking assistant. Ask me anything about recipes, ingredients, or cooking!",
    },
  ]);

  // نفس الـ session طوال المحادثة
  const sessionId = useRef(
    localStorage.getItem("cookingChatSession") ||
      crypto.randomUUID()
  );

  localStorage.setItem("cookingChatSession", sessionId.current);

  const handleSend = async () => {
    const userMessage = message.trim();

    if (!userMessage || isLoading) return;

    // نظهر رسالة المستخدم مباشرة
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(N8N_CHAT_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          action: "sendMessage",
          sessionId: sessionId.current,
          chatInput: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();

      console.log("n8n response:", data);

      const aiResponse =
        data.output ||
        data.text ||
        data.response ||
        "Sorry, I couldn't generate a response.";

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: aiResponse,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <button
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        🍳
      </button>

      {isOpen && (
        <div className="chat-window">

          <div className="chat-header">
            <div>
              <h3>Cooking Assistant</h3>
              <span>AI Recipe Assistant</span>
            </div>

            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="chat-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? "user-message"
                    : "ai-message"
                }
              >
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="ai-message">
                Thinking...
              </div>
            )}

          </div>

          <div className="chat-input-container">

            <input
              type="text"
              placeholder="Ask about cooking..."
              value={message}
              disabled={isLoading}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              onClick={handleSend}
              disabled={isLoading}
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Chat;