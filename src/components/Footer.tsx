import { NavLink } from "react-router-dom";
import { glamora } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col gap-16 bg-charcoalGray rounded-t-[50px] md:rounded-t-[100px] py-8 md:py-16 px-6 md:px-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        <NavLink to='/'>
          <img src={glamora} alt="Glamora" className="h-[80px] md:h-[120px]" />
        </NavLink>
        <div className="flex flex-col gap-4 md:gap-6">
          <h5 className="text-lg md:text-xl font-bold lavender-text">Tautan</h5>
          <div className="flex flex-col gap-2 md:gap-4">
            <div><NavLink to='/' className='lavender-text text-sm md:text-base font-medium hover:font-bold'>Beranda</NavLink></div>
            <span className='lavender-text text-sm md:text-base font-medium'>Fitur</span>
            <span className='lavender-text text-sm md:text-base font-medium'>Survey</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h5 className="text-lg md:text-xl font-bold lavender-text">Layanan</h5>
          <div className="flex flex-col gap-2 md:gap-4">
            <div><NavLink to='/analisis' className='lavender-text text-sm md:text-base font-medium hover:font-bold'>Analisis Wajah</NavLink></div>
            <div><NavLink to='/progress' className='lavender-text text-sm md:text-base font-medium hover:font-bold'>Progress Tracking</NavLink></div>
            <div><NavLink to='/virtual' className='lavender-text text-sm md:text-base font-medium hover:font-bold'>Virtual Try-on</NavLink></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h5 className="text-lg md:text-xl font-bold lavender-text">Kontak</h5>
          <div className="flex flex-col gap-2 md:gap-4">
            <span className='lavender-text text-sm md:text-base font-medium'>&#40;031&#41; 1234567</span>
            <span className='lavender-text text-sm md:text-base font-medium'>bantuan@glamora.com</span>
          </div>
        </div>
      </div>
      <span className="text-sm md:text-base font-medium text-white text-center">Copyright © 2024 Glamora. All rights reserved.</span>
    </div>
  );
}

export default Footer;
