import { useState } from "react";
import { Home, LogOut, Menu, User, X } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuItems] = useState([
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/account',
      label: 'My Account',
    },
    {
      link: '/logout',
      label: 'Logout',
    },
  ])

  const [opened, setOpened] = useState(true)

  return (
    <>
      <header className="flex justify-between py-4">
        <div>
          <div className="flex items-center gap-2">
            <Menu className="cursor-pointer" onClick={() => setOpened(true)} />
            <div className="font-bold text-lg">
              E-commerce
            </div>
          </div>
        </div>
      </header>

      <aside className={`p-4 transition-all ease-in-out duration-500 bg-white fixed top-0 h-screen w-screen ${opened ? 'left-0' : 'left-[-100%]'}`}>
        <div className="flex items-center gap-2 mb-3">
          <X className="cursor-pointer" onClick={() => setOpened(false)} />
          <div className="font-bold text-lg">
            E-commerce
          </div>
        </div>

        <ul>
          {menuItems.map(item => (
            <li className="mb-3">
              <Link to={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Navbar;