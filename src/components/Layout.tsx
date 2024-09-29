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