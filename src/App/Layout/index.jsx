import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";

function Layout() {
  return (
    <>
    <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;