import { thumbnailShoe5 } from "../assets/images";
import  Button2  from "../components/Button2";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center mt-16 max-lg:flex-col gap-6 tab:gap-16 w-full'
    >
      <div className='flex flex-1 flex-col justify-center items-center lap:items-start'>
        <h2 className='font-palanquin text-[20px] mm:text-[24px] tab:text-[31px] font-bold text-center'>
          Superior Quality -
          <span className='text-coral-red'> SneakerWave </span>'s Promise
        </h2>
        <p className='mt-6 info-text font-montserrat text-slate-gray text-base lap:text-lg lap:mr-24 text-center lap:text-justify'>
        Crafting comfort and elegance into every step. Discover our commitment to excellence in footwear, 
        where quality meets innovative design. Experience the SneakerWave difference with each pair tailored 
        for your lifestyle.
        </p>
        <p className='mt-8 tab:mt-12  info-text font-montserrat text-slate-gray text-base lap:text-lg text-center lap:text-justify'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-8 tab:mt-11'>
          <Button2 label='View details' />
        </div>
      </div>
      

      <div className='flex justify-end'>
        <img
          src={thumbnailShoe5}
          alt='product detail'
          className='object-contain ml:w-[423px] ml:h-[472px]  tab:w-[423px] tab:h-[517px] '
        />
      </div>
    </section>
  );
};

export default SuperQuality;