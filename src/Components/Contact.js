import worldMap from "../assets/worldMap.png";

const Contact = () => {
  return (
    <div className="my-20">
      <div className="container flex flex-col items-center">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <p className="w-1/2 text-center my-7">
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>
        <div className="flex items-center my-5">
          <div className="w-2/5">
            <form className="w-full flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Name"
                className=" rounded w-full placeholder:text-sm placeholder: bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <input
                type="text"
                placeholder="Country"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <input
                type="text"
                placeholder="Mode of Contact"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <input
                type="text"
                placeholder="Contact details"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <input
                type="text"
                placeholder="Are You A?"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />

              <input
                type="text"
                placeholder="Select products"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <textarea
                placeholder="Message"
                className=" rounded w-full placeholder:text-sm bg-gray-100 p-2  focus:bg-white focus:outline-1 focus:outline-gray-500"
              />
              <button className="w-max text-white bg-theme-orange px-7 py-2 rounded hover:bg-opacity-50 hover:text-black">
                Send Message
              </button>
            </form>
          </div>
          <div className="w/3/5">
            <img src={worldMap} alt="contactUs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
