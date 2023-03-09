import { useState } from "react";
import questionMark from "../assets/questionMark.png";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQCard = (props) => {
  const [open, setOpen] = useState(false);

  const toggleChangeHandler = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="bg-white rounded shadow-md w-full max-w-full relative p-5">
      <div className="flex space-x-5">
        <span>
          {!open && (
            <button onClick={toggleChangeHandler}>
              <AiOutlinePlus size={30} />
            </button>
          )}
          {open && (
            <button onClick={toggleChangeHandler} className="text-theme-orange">
              <AiOutlineMinus size={30} />
            </button>
          )}
        </span>
        <div>
          <h2>{props.title}</h2>{" "}
          {open && <p className="text-xs my-2">{props.content}</p>}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="mt-20">
      <div className="container flex flex-col items-center">
        <h1 className="font-bold text-2xl">FAQs</h1>
        <div className="flex  my-16 ">
          <div className="w-1/2">
            <img src={questionMark} alt="FAQs" />
          </div>
          <div className="w-1/2 flex flex-col space-y-5">
            <FAQCard
              title="she met humoured sir breeding her. Six curiosity day assurance bed necessary."
              content="Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
            />
            <FAQCard
              title="And excellence partiality estimating terminated day everything?"
              content="Demo Text"
            />
            <FAQCard
              title="Latter person am secure of estate genius at?"
              content="Demo Text"
            />
            <FAQCard
              title="Whatever landlord yourself at by pleasure of children be?"
              content="Demo Text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
