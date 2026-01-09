import GovHeader from "./GovHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotButton from "../chatbot/ChatbotButton";


export default function Layout({ children }) {
  return (
    <>
      <GovHeader />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatbotButton />
    </>
  );
}
