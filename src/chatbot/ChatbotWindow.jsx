import { useState, useEffect } from "react";
import { sendMessageToBot } from "./chatbotApi";

function ChatbotWindow({ closeChat }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to IT Knowledge Centre 👋 How can I help you?" }
  ]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);

    try {
      const reply = await sendMessageToBot(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="card shadow"
      style={{
        position: "fixed",
        bottom: isMobile ? "0" : "90px",
        right: isMobile ? "0" : "20px",
        width: isMobile ? "100%" : "360px",
        height: isMobile ? "90vh" : "500px",
        borderRadius: isMobile ? "0" : "12px",
        zIndex: 1100
      }}
    >
      {/* Header */}
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <span>ITKC Assistant</span>
        <button
          className="btn btn-sm btn-light"
          onClick={closeChat}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div
        className="card-body"
        style={{
          overflowY: "auto",
          paddingBottom: "80px"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`d-flex mb-2 ${
              msg.sender === "user"
                ? "justify-content-end"
                : "justify-content-start"
            }`}
          >
            <span
              className={`px-3 py-2 rounded ${
                msg.sender === "user"
                  ? "bg-primary text-white"
                  : "bg-light"
              }`}
              style={{ maxWidth: "80%" }}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {loading && (
          <div className="text-muted fst-italic">
            ITKC Assistant is typing...
          </div>
        )}

        {/* Quick options */}
        <div className="mt-3">
          <button
            className="btn btn-outline-primary w-100 mb-2"
            onClick={() => sendMessage("courses")}
          >
            📘 Courses
          </button>
          <button
            className="btn btn-outline-primary w-100 mb-2"
            onClick={() => sendMessage("certificate")}
          >
            🎓 Certificates
          </button>
          <button
            className="btn btn-outline-primary w-100 mb-2"
            onClick={() => sendMessage("login")}
          >
            🔐 Login / Register
          </button>
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => sendMessage("contact")}
          >
            ☎ Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatbotWindow;
