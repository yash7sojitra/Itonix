import { ChevronLeft, ChevronRight } from "react-feather";
import quotes from "../assets/quote.png";

const Corousel = (props) => {
  const left = () => {
    document.getElementById("content").scrollLeft -= 505;
  };

  const right = () => {
    document.getElementById("content").scrollLeft += 505;
  };
  return (
    <div className="w-[500px]">
      <div className=" relative w-[500px]  my-5 ">
        <div
          id="content"
          className="carousel flex space-x-[5px] justify-start scrollbar-hide overflow-x-auto scroll-smooth items-center"
        >
          <div className="bg-theme-orange rounded-md text-white text-center p-7 h-56  min-w-full">
            <img src={quotes} alt="rating" />
            <h3 className="text-lg my-2">Robin Ayala Doe</h3>
            <p className="text-sm">
              From the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast.
            </p>
          </div>
          <div className="bg-theme-orange rounded-md text-white text-center p-7 h-56 min-w-full">
            <img src={quotes} alt="rating" />
            <h3 className="text-lg my-2">John De marli</h3>
            <p className="text-sm">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>
          </div>
          <div className="bg-theme-orange rounded-md text-white text-center h-56 p-7 min-w-full">
            <img src={quotes} alt="rating" />
            <h3 className="text-lg my-2">Rowhan Smith</h3>
            <p className="text-sm">
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 flex justify-center space-x-5">
        <button
          onClick={left}
          className="bg-theme-orange text-white rounded-[50%] p-2 hover:bg-opacity-60 hover:text-black"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={right}
          className="bg-theme-orange text-white rounded-[50%] p-2 hover:bg-opacity-60 hover:text-black"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Corousel;
