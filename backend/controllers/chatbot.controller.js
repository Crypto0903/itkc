// backend/controllers/chatbot.controller.js

const db = require("../config/db");

exports.handleMessage = (req, res) => {
  const userMessage = req.body.message?.toLowerCase();

  if (!userMessage) {
    return res.json({
      reply: "Please enter a valid message."
    });
  }

  const query = `
    SELECT answer, keywords
    FROM chatbot_knowledge
    WHERE is_active = 1
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({
        reply: "Server error. Please try again later."
      });
    }

    let reply =
      "Sorry, I could not find an answer to your question. Please contact ITKC for assistance.";

    for (let row of results) {
      if (!row.keywords) continue;

      const keywords = row.keywords
        .split(",")
        .map((k) => k.trim());

      if (keywords.some((k) => userMessage.includes(k))) {
        reply = row.answer;
        break;
      }
    }

    // Log chat (recommended for govt projects)
    db.query(
      "INSERT INTO chatbot_logs (user_message, bot_response) VALUES (?, ?)",
      [userMessage, reply]
    );

    return res.json({ reply });
  });
};
