const Button = (props) => {
  return (
    <button className="text-white bg-theme-orange px-7 py-2 rounded hover:bg-opacity-50 hover:text-black">
      {props.children}
    </button>
  );
};

export default Button;
