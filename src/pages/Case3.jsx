import Case3 from "../component/Case3/MainContent";
import Navbar from "../component/Case1/Navbar";
import Footer from "../component/Case1/Footer";

function Case3Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen items-center justify-center overflow-x-hidden">
        <Case3 />
      </div>
      <Footer />
    </div>
  );
}

export default Case3Page;
