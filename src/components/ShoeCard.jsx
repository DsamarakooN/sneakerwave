const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover w-[68px] h-[68px] tab:w-[120px] tab:h-[120px] lap:h-[130px] lap:w-[130px] rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={117}
            height={117}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;