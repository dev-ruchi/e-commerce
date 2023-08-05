import { useState } from "react";
import { Menu, X } from "react-feather";
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

  const [opened, setOpened] = useState(false)

  function handleClick() {
    setOpened(!opened);
  }

  return (
    <>
      <header className="flex justify-between py-4">
        <div>
          <div className="flex gap-2">
            <Menu className="cursor-pointer" onClick={() => setOpened(true)} />
            <div className="font-bold">
              E-commerce
            </div>
          </div>
        </div>
      </header>

      <aside className={`transition-all ease-in-out duration-500 bg-gray-200 fixed top-0 h-screen w-screen ${opened ? 'left-0' : 'left-[-100%]'}`}>
        <div className="flex gap-2 p-4">
          <X className="cursor-pointer" onClick={() => setOpened(false)} />
          <div className="font-bold">
            E-commerce
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar;