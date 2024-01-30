const Button2 = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center px-[18px] text-lg font-bold font-montserrat py-3
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red hover:bg-btn-hov"
        } rounded-xl ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='mx-1 rounded-full'
          />
        )}
      </button>
    );
  };
  
  export default Button2;