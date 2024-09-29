import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollReveal from "./ScrollReveal";

const Layout = () => {
  // const error = useRouteError();

  return (
    <div className="bg-image min-h-screen">
      <Navbar/>
      <div className="pt-16"></div>
      <ScrollReveal/>
      <ScrollToTop/>
      <Outlet/>
      {/* <div>
        {error ? <ErrorElement/> : <Outlet/>}
      </div> */}
      <Footer/>
    </div>
  )
}

export default Layout;