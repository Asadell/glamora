import { NavLink } from "react-router-dom";
import { glamora } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col gap-16 bg-charcoalGray rounded-t-[100px] py-16 px-[120px]">
      <div className="grid grid-cols-4 gap-16">
        <NavLink to='/'>
          <img src={glamora} alt="Glamora" className="h-[120px]" />
        </NavLink>
        <div className="flex flex-col gap-6">
          <h5 className="text-xl font-bold lavender-text">Tautan</h5>
          <div className="flex flex-col gap-4">
            <NavLink to='/' className='lavender-text text-base font-medium'>Beranda</NavLink>
            <NavLink to='/fitur' className='lavender-text text-base font-medium'>Fitur</NavLink>
            <NavLink to='/survey' className='lavender-text text-base font-medium'>Survey</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="text-xl font-bold lavender-text">Layanan</h5>
          <div className="flex flex-col gap-4">
            <span className='lavender-text text-base font-medium'>Analisis Wajah</span>
            <span className='lavender-text text-base font-medium'>Progress Tracking</span>
            <span className='lavender-text text-base font-medium'>Virtual Try-on</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="text-xl font-bold lavender-text">Kontak</h5>
          <div className="flex flex-col gap-4">
            <span className='lavender-text text-base font-medium'>&#40;031&#41; 1234567</span>
            <span className='lavender-text text-base font-medium'>bantuan@glamora.com</span>
          </div>
        </div>
      </div>
      <span className="text-base font-medium text-white text-center">Copyright © 2023 Glamora. All rights reserved.</span>
    </div>
  );
}

export default Footer;