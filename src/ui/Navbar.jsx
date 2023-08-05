const Navbar = () => {

  return (
    <div className="">
      <nav className="flex justify-between py-4">
        <h1 className="text-xl font-bold text-blue-500 hover:text-blue-800">E-commerce</h1>
        <ul className="flex gap-6 text-blue-500 hover:text-blue-800">
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="/">Home</a>
          </li>
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="/admin/products/create">Add Product</a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar;