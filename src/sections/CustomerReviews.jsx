import  ReviewCard  from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container mt-16'>
      <div className='flex flex-col justify-start gap-5'>
        <div className="flex flex-row justify-center tab:justify-between items-center ">
          <h2 className='text-[20px] mm:text-[24px] tab:text-[31px] text-primary-b font-palanquin font-bold'>
            What Our <span className='text-coral-red'>Customers </span>Say?
          </h2>
          <a href='#' className='font-montserrat hidden tab:flex font-medium text-lg text-primary-b hover:underline hover:text-coral-red'>
            More Reviews
          </a>
        </div>
      </div>

      <div className='mt-8 flex flex-1 justify-evenly items-center max-lg:flex-col gap-8'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;