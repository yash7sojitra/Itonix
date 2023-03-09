import Corousel from "./Corousel";

const Reviews = () => {
  return (
    <div className="my-20">
      <div className="container flex flex-col space-y-5 items-center">
        <h1 className="font-bold text-2xl">Our Reviews</h1>
        <Corousel />
        <div className="h-[2px] rounded my-5 bg-theme-orange w-3/4"></div>
      </div>
    </div>
  );
};

export default Reviews;
