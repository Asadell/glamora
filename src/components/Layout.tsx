import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  // const error = useRouteError();

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Outlet/>
      {/* <div>
        {error ? <ErrorElement/> : <Outlet/>}
      </div> */}
      <Footer/>
    </>
  )
}

export default Layout;