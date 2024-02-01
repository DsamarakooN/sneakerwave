import { dealimg1, dealimg2, dealimg3 } from "../assets/images";
import  Button  from "../components/Button";
import  Button2  from "../components/Button2";
import { arrowRight } from "../assets/icons";
import { arrow2 } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className='flex relative items-center justify-center h-[300px]  lap:h-[377px]'>
      <div className='flex relative items-center flex-col justify-center w-full ml:mx-6 mm:mx-2.5 tab:w-6/12'>
          <h2 className='text-[20px] mm:text-[24px] tab:text-[31px] text-white-400 font-palanquin font-bold'>
            <span className='text-coral-red'>Deal </span>of the Week
          </h2>
          <p className='mt-6 font-montserrat text-white-400 text-base lap:text-lg text-center'>
            Get 10% off on <a href="#" className='text-coral-red hover:underline italic'> NIKE AIR JORDAN 1 RETRO HIGH OG! </a> Step up your style with these iconic sneakers at a special discounted price. 
            Don't miss out – this offer is only valid for a limited time!
          </p>
          <div className="flex flex-row gap-1 mt-8 ml:gap-4">
          <Button2 
            label='Shop now' 
            iconURL={arrowRight} 
          />
          <Button2
              label='Learn more'
              backgroundColor='bg-primary-b'
              borderColor='border-slate-gray'
              textColor='text-white-400'
              iconURL={arrow2}
          />
          </div>
      </div>
      
      <img
          src={dealimg1}
          alt='Deal image 1'
          className='hidden lap:flex absolute left-0 top-0 w-auto h-[117%] overflow-visible'
      />
      <img
          src={dealimg2}
          alt='Deal image 2'
          className='hidden tab:flex absolute right-0 top-0 w-auto h-[117%] overflow-visible'
      />
      <img
          src={dealimg3}
          alt='Deal image 3'
          className='hidden lap:flex absolute right-1/3 top-10 w-[100px] h-[100px] overflow-visible'
      />
    </section>
  );
};

export default SpecialOffer;