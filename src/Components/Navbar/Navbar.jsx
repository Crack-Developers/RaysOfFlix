import React, { useState } from "react";
import Logo from "../../assets/logo3.png";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Our Services",
    link: "/ourservices",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex items-center justify-between">
            <p className="text-sm flex items-center">
              <IoMdMail className="mr-2" /> raysofflix2023@gmail.com
            </p>
            <p className="flex items-center">
              <BiSolidPhoneCall className="mr-2" /> +91 93600 19584
            </p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 font-bold text-2xl">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="Logo" className="h-20" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavbarLinks.map((link) => (
                <li key={link.name} className="py-4">
                  <NavLink
                    to={link.link}
                    onClick={scrollToTop}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l transition-all duration-600 text-white px-3 py-1 rounded-full"
              onClick={handleOrderPopup}
            >
              Contact Us
            </button>
            {/* Mobile Hamburger icon */}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
