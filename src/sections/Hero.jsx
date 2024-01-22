import { useState } from "react";

import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { arrow1 } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full mx-auto flex xl:flex-row flex-col justify-center min-h-screen gap-10 px-16'
    > 
      {/* <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-24 ml-0'>

        <span className='mt-2 font-palanquin text-8xl  font-bold xl:bg-white text-center rounded-3xl xl:whitespace-nowrap relative z-10 pr-5 pt-[25px] pb-[41px]'>
        Latest Trendsetters          
        </span>
        <span className='font-palanquin text-4xl align-middle font-bold'>        
          from <span className='text-coral-red inline-block mt-0'>SneakerWave</span>
        </span>
        <p className='font-montserrat text-slate-gray text-lg text-justify leading-8 mt-6 mb-14 '>
        Embrace the latest in style, comfort, and innovation. Our fresh collection offers the best in footwear, 
        tailored for your dynamic lifestyle.
        </p>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <Button label='Shop Now' iconURL={arrowRight} />
          </div>
          <div>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            textColor='text-black-400'
            iconURL={arrow1}
          />
          </div>
        </div>

        

        <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-14'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-[39px] font-palanquin font-bold'>{stat.value}</p>
              <p className='text-lg leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center '>
        <div className='absolute top-0 ml-[70px] h-[685px] w-[730px] bg-gradient-to-b from-gr-top to-gr-bottom'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={550}
          height={450}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 max-h-96'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;