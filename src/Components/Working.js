import idea from "../assets/idea.png";
import budget from "../assets/Budget.png";
import lifetime from "../assets/lifetime.png";
import vectorRightIdea from "../assets/vectorRightIdea.png";
import vectorRightBudget from "../assets/VectorRightBudget.png";

const Working = () => {
  return (
    <div className="py-10">
      <div className="container flex flex-col space-y-2 justify-center items-center ">
        <h1 className=" font-bold text-2xl">How does it work?</h1>
        <p className="pb-10 w-1/2 text-center">
          Was are delightful solicitude discovered collecting man day. Resolving
          neglected sir tolerably.
        </p>

        <div className="flex space-x-10 ">
          <div className="relative w-2/5 flex flex-col items-center">
            <img
              src={vectorRightIdea}
              alt="vector"
              className="absolute left-[80%] top-[25%]"
            />
            <div className=" relative w-40 h-40 grid place-items-center rounded-[50%] border-[2px] border-dashed p-5 hover:bg-black hover:bg-opacity-10 hover:border-none  hover:shadow-xl">
              <p className="absolute top-0 left-0 font-bold">1</p>
              <img src={idea} alt="creative team" />
            </div>
            <h2 className="font-bold my-5">Creative team</h2>
            <p className="text-center mt-5">
              We have a highly talented and powerful creative team.
            </p>
          </div>
          <div className="relative w-2/5 flex flex-col items-center">
            <img
              src={vectorRightBudget}
              alt="vector"
              className="absolute left-[80%] top-[20%]"
            />
            <div className=" relative w-40 h-40 grid place-items-center rounded-[50%] border-[2px] border-dashed p-5 hover:bg-black hover:bg-opacity-10 hover:border-none  hover:shadow-xl">
              <p className="absolute top-0 left-0 font-bold">2</p>
              <img src={budget} alt="budget" />
            </div>
            <h2 className="font-bold my-5">Budget Friendly</h2>
            <p className="text-center mt-5">
              We will charge you based on the amount of work one website needs
              to create
            </p>
          </div>
          <div className="w-2/5 flex flex-col items-center">
            <div className=" relative w-40 h-40 grid place-items-center rounded-[50%] border-[2px] border-dashed p-5 hover:bg-black hover:bg-opacity-10 hover:border-none  hover:shadow-xl">
              <p className="absolute top-0 left-0 font-bold">3</p>
              <img src={lifetime} alt="lifetime" />
            </div>
            <h2 className="font-bold my-5">Lifetime Support</h2>
            <p className="text-center mt-5">
              We got beyond to help our clients. once we finish working on your
              website we will always be there to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
