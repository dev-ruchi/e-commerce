import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuItems] = useState([
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/cart",
      label: "Cart",
    },
    {
      link: "/profile",
      label: "My Account",
    },
    {
      link: "/logout",
      label: "Logout",
    },
  ]);

  const [opened, setOpened] = useState(false);

  return (
    <div className="border-b-4 border-gray-500 mb-8">
      <header className="container mx-auto flex justify-between py-4">
        <div>
          <div className="flex items-center gap-2">
            <Menu
              className="cursor-pointer md:hidden"
              onClick={() => setOpened(true)}
            />
            <Link to="/" className="font-bold text-lg">
              E-commerce
            </Link>
          </div>
        </div>
        <ul className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <li key={`nav-${item.link}`}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </header>

      <aside
        className={`p-4 transition-all ease-in-out duration-500 bg-white fixed top-0 h-screen w-screen ${
          opened ? "left-0" : "left-[-100vw]"
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <X className="cursor-pointer" onClick={() => setOpened(false)} />
          <Link to="/" className="font-bold text-lg">
            E-commerce
          </Link>
        </div>

        <ul>
          {menuItems.map((item) => (
            <li className="mb-3" key={`nav-${item.link}`}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
