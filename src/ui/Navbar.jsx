import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuItems, setMenuItems] = useState([
    {
      link: '/',
      label: 'Home'
    },
    {
      link: '/account',
      label: 'My Account'
    }
  ])

  return (
    <header className="p-4 md:px-16 md:py-4">
      <nav className="p-4 absolute left-0 top-0 h-[100dvh] w-[100dvw] bg-gray-200 md:flex md:justify-between md:items-center">
        <div className="flex justify-between">
          <div className="md:hidden flex items-center gap-3 cursor-pointer">
            <div className="nav-toggle">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
            <a className="font-bold text-xl" href="/" title="Homepage">E-commerce</a>
          </div>
        </div>

        <div className="menu">
          <div className="flex flex-col md:flex-row gap-1 md:gap-6">
            {
              menuItems.map(item => <Link key={item.link} to={item.link}>{item.label}</Link>)
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;