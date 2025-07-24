import React from "react";
import Navbar from "../component/Case1/Navbar";
import MainContent from "../component/Case1/MainContent";
import Footer from "../component/Case1/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex w-screen flex-col items-center justify-center flex-1">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
