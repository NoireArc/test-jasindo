import Case2 from "../component/Case2/MainContent";
import Navbar from "../component/Case1/Navbar";
import Footer from "../component/Case1/Footer";

function Case2Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center overflow-x-hidden">
        <Case2 />
      </div>
      <Footer />
    </div>
  );
}

export default Case2Page;
