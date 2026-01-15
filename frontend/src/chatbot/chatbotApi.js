import axios from "axios";

const API_URL = "http://localhost:5000/api/chatbot";

export const sendMessageToBot = async (message) => {
  const response = await axios.post(`${API_URL}/ask`, {
    message
  });

  return response.data.reply;
};
