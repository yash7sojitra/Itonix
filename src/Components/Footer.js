import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className=" container">
        <div className="pt-10 flex flex-col items-center">
          <h1 className="font-bold text-2xl">Get Our Newsletter</h1>
          <p className="w-1/2 text-center my-3">
            To join the worldwide community
          </p>
          <form className="w-1/2 bg-white px-5 py-3 rounded-md my-5 flex items-center justify-between shadow-lg space-x-5 ">
            <input
              type="email"
              placeholder="Type your Email Address"
              className="p-5 w-3/5 focus:outline-none "
            />
            <button className=" text-white bg-theme-orange px-10 py-3 h-max rounded hover:bg-opacity-50 hover:text-black">
              Send now
            </button>
          </form>
          <div className="h-[2px] rounded mt-20 mb-10 bg-gray-500 w-3/4"></div>
          <div className="w-3/4">
            <div className="flex justify-end ">
              <ul className="flex justify-end space-x-5">
                <li>About Company</li>
                <li>Products</li>
                <li>Services & Solutions</li>
              </ul>
            </div>
            <div className="my-5 flex justify-between items-center">
              <div>
                <p>DAMAC XL TOWER - Office 706 - Business Bay</p>
                <p> +971 58 105 7767</p>
              </div>
              <div>
                <ul className="flex space-x-5 ">
                  <li className="">
                    <FaFacebookSquare className="text-theme-orange" />
                  </li>
                  <li>
                    <FaTwitterSquare className="text-theme-orange" />
                  </li>
                  <li>
                    <FaLinkedin className="text-theme-orange" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm font-bold my-5">
            Copyright © 2021 Jayydevani. All Rights Reseved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
