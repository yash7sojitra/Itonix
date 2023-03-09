import logo from "../assets/Logo 1.png";

const Navigation = () => {
  return (
    <nav className="w-screen fixed top-0 shadow-xl bg-[#989898]  bg-opacity-30 z-20 backdrop-blur-xl">
      <div className="container flex justify-between items-center h-[10vh] ">
        <div>
          <img src={logo} alt="itonix Logo" />
        </div>
        <ul className="flex items-center space-x-10 ">
          <li className="hover:scale-110">
            <button>About Company</button>
          </li>
          <li className="hover:scale-110">
            <button>Products</button>
          </li>
          <li className="hover:scale-110">
            <button>Services & Solutions</button>
          </li>
        </ul>
        <button className="text-white bg-theme-orange px-7 py-2 rounded hover:bg-opacity-50 hover:text-black">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
