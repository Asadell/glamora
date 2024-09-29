import { NavLink, useLocation } from "react-router-dom";
import { glamora } from "../assets";
import { NAV_LIST } from "../constants";

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <nav className="bg-white rounded-b-[40px]">
      <div className="min-w-full py-8 px-[120px] flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={glamora} alt="glamora" className="h-10" />
          <span className="font-bold text-2xl">Glamora</span>
        </NavLink>
        <div className="md:order-2">
          <button className="py-4 px-10 rounded-[100px] bg-primary-gradient shadow-smooth-shadow text-white font-bold">Masuk</button>
        </div>
        <div>
          <ul className="flex gap-6">
            {NAV_LIST.map((nav) => (
              <li>
                <NavLink key={nav.url} to={nav.url} className={pathname === nav.url ? 'navbar-border-effect text-midnightBlack' : 'hover:navbar-border-effect text-slateStorm'}>{nav.title}</NavLink>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;