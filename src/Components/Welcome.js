import welcomeImage from "../assets/welcome.png";

const Welcome = () => {
  return (
    <section className="flex justify-center ">
      <div className="container h-[100%] flex items-center justify-between pt-[10vh]">
        <div className="flex flex-col justify-center space-y-5 w-1/2">
          <h1 className="font-bold text-4xl">
            Welcome to <span className="text-theme-orange">Itonix</span>
          </h1>
          <p className="w-3/5 text-base">
            Get the power of Distributing Tracking & Managing Brokerage Clients
            in Real-Time
          </p>
          <button className="w-max text-white bg-theme-orange px-7 py-2 rounded hover:bg-opacity-50 hover:text-black">
            Learn More
          </button>
        </div>
        <div className=" w-1/2  flex items-center">
          <img src={welcomeImage} alt="Welcome to itonix" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
