import { useState, useEffect } from "react";
import ChatbotWindow from "./ChatbotWindow";
import chatbotLogo from "../assets/chatbot-logo.png";

function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Chat window */}
      {open && <ChatbotWindow closeChat={() => setOpen(false)} />}

      {/* Chatbot button (visible only when chat is closed) */}
      {!open && (
        <>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open ITKC Chatbot"
            className="btn shadow"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: isMobile ? "56px" : "60px",
              height: isMobile ? "56px" : "60px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "2px solid #0d6efd",
              padding: "0",
              zIndex: 1050,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatChatbot 3s ease-in-out infinite"
            }}
          >
            <img
              src={chatbotLogo}
              alt="ITKC Assistant"
              style={{
                width: isMobile ? "30px" : "50px",
                height: isMobile ? "30px" : "50px",
                objectFit: "contain"
              }}
            />
          </button>

          {/* Floating animation */}
          <style>
            {`
              @keyframes floatChatbot {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-6px);
                }
                100% {
                  transform: translateY(0);
                }
              }
            `}
          </style>
        </>
      )}
    </>
  );
}

export default ChatbotButton;
