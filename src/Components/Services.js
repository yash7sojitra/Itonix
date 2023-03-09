import service1 from "../assets/Services/service1.png";
import licence from "../assets/Services/licence.png";
import handshake from "../assets/Services/handshake.png";
import graph from "../assets/Services/graph2.png";
import company from "../assets/Services/company2.png";
import bank from "../assets/Services/bank-building.png";
import setting from "../assets/Services/settings2.png";
import certificate from "../assets/Services/certificate2.png";
import solution from "../assets/Services/solution2.png";
import trader from "../assets/Services/trader2.png";

const Services = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">Services & Solutions</h1>
          <ul className="grid grid-cols-6 gap-5 my-10">
            <li className="flex space-x-3 items-center col-start-1 col-span-2  bg-white  p-5 rounded-md  w-60 hover:scale-110  shadow-xl">
              <img src={service1} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">FOREX COMPANY FORMATION</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-3 col-span-2 bg-white  p-5 rounded-md  w-60 hover:scale-110  shadow-xl">
              <img src={licence} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">FOREX LICENSE</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-5 col-span-2  bg-white p-5 rounded-md  w-60 hover:scale-110  shadow-xl">
              <img src={handshake} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">BUSINESS SETUP UAE</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-2 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={graph} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">
                BUSINESS SETUP MAURETIUS
              </h2>
            </li>
            <li className="flex space-x-3 items-center col-start-4 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={company} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">BUSINESS SETUP UK</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-1 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={bank} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">BANK ACCOUNT OPENING</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-3 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={setting} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">
                OURSOURCED SUPPORT SERVICE
              </h2>
            </li>
            <li className="flex space-x-3 items-center col-start-5 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={certificate} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">VERTEX LICENSE</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-2 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={solution} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">VERTEX WHITELABEL</h2>
            </li>
            <li className="flex space-x-3 items-center col-start-4 col-span-2 bg-white p-5 w-60 shadow-xl hover:scale-110 rounded-md">
              <img src={trader} alt="" className="w-7 h-7" />
              <h2 className="font-semibold text-sm">
                BROKER TOOLS (RISK MANAGEMENT)
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
