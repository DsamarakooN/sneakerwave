import  Button  from "../components/Button";
import { dealimg4 } from "../assets/images";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex items-center'
    >
      <div className='flex relative w-full items-center h-auto tab:h-[230px] lap:h-[345px] p-10 ml:p-20   tab:p-0 bg-gradient-to-t from-gr-top to-gr-bottom rounded-3xl'>
      <img
          src={dealimg4}
          alt='Deal image 2'
          className='hidden tab:flex absolute right-3 top-0 w-auto h-[125%] overflow-visible'
      />
          <div className='flex flex-col items-start gap-5 w-full tab:w-3/6 tab:ml-24' >
          <h2 className='text-[20px] mm:text-[24px] tab:text-[25px] lap:text-[31px] text-primary-b font-palanquin font-bold text-center tab:text-justify '>
            Subscribe to Our Newsletter to get monthly voucher or
            <span className='text-offer-red'> 25% off</span>
          </h2>

          <form action="#" className="w-full">
            <div className='flex flex-row gap-5 w-full h-14 items-center  text-base leading-6 border-2 border-coral-red rounded-3xl'>
              <input
                type='email'
                placeholder='youremail@gmail.com'
                className='w-full h-14 px-5 text-base leading-6 font-montserrat text-white-400 bg-transparent  rounded-3xl focus:outline-none'
              />
              <button className='flex justify-center items-center font-montserrat font-bold text-white-400 h-12 px-3 mm:px-6 mr-0.5 bg-coral-red hover:bg-btn-hov rounded-3xl'>
                Subscribe
              </button>
            </div>
          </form>
          
          </div>
      </div>
        
    </section>
  );
};

export default Subscribe;