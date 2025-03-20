import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="out-cont">
      <Navbar />
      <main className="inn-cont">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
