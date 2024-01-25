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
      className='w-full flex flex-col-reverse lap:flex-row  min-h-screen lap:gap-20 max-container'
    >
      <div className="relative w-full lap:w-5/12 flex flex-col items-center justify-center lap:items-start lap:justify-start lap:pt-24 ">
        <h1 className="mt-3 tab:mt-8 lap:mt-10 font-palanquin text-2xl tab:text-4xl lap:text-8xl font-bold text-black-primary">
          <span className="relative z-10 lap:bg-white lap:whitespace-nowrap rounded-xl lap:pr-8 lap:pb-3 ">Latest Trendsetters</span>
        </h1> 
        <h2 className="font-palanquin text-xl tab:text-3xl lap:text-4xl lap:pt-10 font-bold text-black-primary">
          from <span className="text-coral-red">SneakerWave</span>
        </h2>
        <p className='font-montserrat text-slate-gray text-base lap:text-lg text-center lap:text-justify  leading-8 mt-3 tab:mt-6 mb-5 tab:mb-10 w-full'>
        Embrace the latest in style, comfort, and innovation. Our fresh collection offers the best in footwear, 
        tailored for your dynamic lifestyle.
        </p>
        <div className="flex flex-row gap-4">
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
              label='Learn more'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-black-primary'
              iconURL={arrow1}
          />
        </div>
        <div className='flex items-center justify-center lap:items-start lap:justify-start flex-wrap w-full mt-5 tab:mt-12 gap-5 tab:gap-[50px]'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-xl tab:text-4xl text-center font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center mb-10 tab:w-full tab:h-screen lap:w-[620px] lap:h-[650px] rounded-b-xl">
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={440}
          height={480}
          className='object-contain relative z-10 w-[250px] h-[280px] tab:w-[500px] tab:h-[550px] mt-16 tab:mt-8'
        />
        <div className='flex gap-2 ml:gap-4 absolute -bottom-[10%] left-auto max-sm:px-1'>
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
    </section>
  );
};

export default Hero;