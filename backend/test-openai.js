require("dotenv").config();
const openai = require("./services/openai.service");

async function testAI() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Reply only with OK" },
      { role: "user", content: "Hello" }
    ]
  });

  console.log(response.choices[0].message.content);
}

testAI();
