import React from 'react';
import "./assets/styles/global/variables.css";
import "./assets/styles/global/global.css";
import "./assets/styles/global/typography.css";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div>
        <Header/>
        <ChatPage/>
      <Footer/>
    </div>
  );
}

export default App;
