import { Link, NavLink } from "react-router-dom";
import arrow from "../assets/images/arrow.png";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <header className="w-full px-[27.5px] py-2.5">
      <div className="border-greenish mx-auto flex max-w-[1200px] items-center justify-between rounded-[12px] border border-solid px-4 py-3 text-white">
        <div className="h-[36px] w-[92px]">
          <img
            src={logo}
            alt="logo"
            width="92"
            height="36"
            className="w-[75px] sm:w-full"
          />
        </div>
        <ul className="font-jeju text-greyish hidden items-center gap-4 text-lg md:flex">
          <li className="p-2.5">
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              Events
            </NavLink>
          </li>
          <li className="p-2.5">
            <NavLink
              to="/my-tickets"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              My Tickets
            </NavLink>
          </li>
          <li className="p-2.5">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              About Project
            </NavLink>
          </li>
        </ul>
        <Link
          to="/tickets"
          className="font-jeju flex justify-between gap-2 rounded-[12px] bg-white px-4 py-3 text-black"
        >
          <span className="text-[10px] md:text-[16px]">MY TICKETS</span>
          <img
            src={arrow}
            alt=""
            aria-hidden
            className="aspect-auto w-3 md:w-5"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
