const Button = ({ className = "", onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={` py-2 md:py-[15px] px-3 md:px-[52px] bg-blue-500 text-white rounded-md md:rounded-[8px] hover:bg-blue-400 text-[12px] md:text-[20px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
