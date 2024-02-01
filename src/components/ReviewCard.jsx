import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col shadow-custom-shadow h-auto lap:h-[600px]  p-10 rounded-3xl'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[150px] h-[150px]'
      />
      <h3 className='mt-1 font-palanquin text-[31px] text-center font-bold'>
        {customerName}
      </h3>
      <div className="flex">
        {Array(5).fill().map((_, index) => (
          <img 
            src={star} 
            alt={`star ${index + 1}`} 
            key={index} 
            width={24}
            height={24}
            className='object-contain mx-0.5'
          />
        ))}
      </div>
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
    </div>
  );
};

export default ReviewCard;