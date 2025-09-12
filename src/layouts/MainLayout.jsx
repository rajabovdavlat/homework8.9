import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../index.css";

const MainLayout = () => {
  const location = useLocation();

  const showFooter = ["/", "/about"].includes(location.pathname);

  return (
    <>
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default MainLayout;
