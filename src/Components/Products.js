import icon1 from "../assets/icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";

const Proudcts = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">Our Product</h1>
          <p className="w-1/2 text-center my-7">
            Unleash your creativety with a visual collaboration plattorm that
            enables effective ideation
          </p>
          <ul className="grid grid-cols-4 gap-7 my-5">
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon1}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">Forex CRM</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon2}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">MT5 Whitelable</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon3}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">MT5 Hosting & Management</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon4}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">Web Design & Development</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon5}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">Digital Marketing</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon6}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">Graphics Designing</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon7}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">Forex Plugins</h3>
            </li>
            <li className="border-[1.5px] h-40 w-40 rounded p-5">
              <img
                src={icon8}
                alt="icon"
                className="bg-gray-200 my-3 p-1 rounded"
              />
              <h3 className="font-black">MT4 MT5 Administration service</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Proudcts;
