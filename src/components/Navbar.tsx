import { NavLink, useLocation } from "react-router-dom";
import { glamora, nattaya } from "../assets";
import { NAV_LIST } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white rounded-b-[40px] fixed w-full z-50">
      <div className="w-full h-[80px] lg:h-[100px] px-6 lg:px-[120px] flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={glamora} alt="glamora" className="h-8 lg:h-10" />
          <span className="font-bold text-xl lg:text-2xl">Glamora</span>
        </NavLink>

        <div className="order-2 w-auto md:w-52 flex justify-end items-center">
          {pathname === '/' ? (
            <button className="hidden md:block py-3 lg:py-4 px-6 lg:px-10 rounded-[100px] bg-primary-gradient shadow-smooth-shadow text-white font-bold">
              Masuk
            </button>
          ) : (
            <div className="hidden md:flex gap-2 lg:gap-4 items-center justify-end">
              <span className="text-sm lg:text-base font-normal">Nattaya Bellucci</span>
              <img src={nattaya} alt="Nattaya" className="h-12 lg:h-16" />
            </div>
          )}

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-4 md:gap-5 lg:gap-6">
            {NAV_LIST.map((nav) => (
              <li key={nav.url}>
                <NavLink
                  to={nav.url}
                  className={pathname === nav.url 
                    ? 'navbar-border-effect text-midnightBlack' 
                    : 'hover:navbar-border-effect text-slateStorm'}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <ul className="flex flex-col gap-4">
            {NAV_LIST.map((nav) => (
              <li key={nav.url} className="mb-2">
                <NavLink
                  to={nav.url}
                  className={pathname === nav.url 
                    ? 'navbar-border-effect text-midnightBlack' 
                    : 'hover:navbar-border-effect text-slateStorm'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {pathname === '/' ? (
            <button className="p-4 min-w-[10rem] rounded-full bg-primary-gradient shadow-smooth-shadow text-white font-bold">
              Masuk
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm font-normal">Nattaya Bellucci</span>
              <img src={nattaya} alt="Nattaya" className="h-10" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
