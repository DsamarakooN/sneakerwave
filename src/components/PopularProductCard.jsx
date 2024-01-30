import React, { useState } from 'react';
import { star } from "../assets/icons";
import Button2 from "./Button2";
import { arrowRight } from "../assets/icons";
import { addtocart } from '../assets/icons';

const PopularProductCard = ({ imgURL1, imgURL2, imgURL3, imgURL4, imgURL5, imgURL6, name, rating, sold, colors, price, quantity }) => {

  const images = [imgURL1, imgURL2, imgURL3, imgURL4, imgURL5, imgURL6];

  const [productImg, setProductImg] = useState(imgURL1);

  return (
    <div className='flex flex-1 flex-col w-full shadow-custom-shadow items-center p-5 rounded-3xl'>
      <img 
        src={productImg} 
        alt={name} 
        className='w-[282px] h-[282px] rounded-2xl' 
      />
      <div className='flex justify-center items-center mt-2 gap-2'>
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              productImg === image ? "bg-coral-red" : "bg-gray-400"
            }`}
            onClick={() => setProductImg(image)}
          
          />
        ))}

      </div>

      <div className='flex w-full justify-start mt-4'>
      <h3 className='text-lg leading-normal font-bold font-palanquin'>
        {name}
      </h3>
      </div>
        
      <div className='mt-[6px] flex w-full justify-start gap-2.5'>
        <div className='flex w-full justify-between gap-2.5'>
          <div className='flex'>
            <img src={star} alt='rating icon' width={20} height={20} />
            <p className='font-montserrat text-lg leading-normal text-slate-gray'>
              ({rating}) {sold} sold
           </p>
          </div>
        <p className='font-montserrat text-lg leading-normal text-slate-gray'>
          {colors} colors
        </p>
        </div>
      </div>

      <div className='mt-[6px] flex w-full justify-start gap-2.5'>
        <div className='flex w-full justify-between gap-2.5'>
          <p className='font-bold font-palanquin text-primary-b text-[13px] leading-normal'>
            LKR <span className='text-coral-red text-lg'>{price}</span>.00
          </p>
          <span className={`${
            quantity < 15 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800" 
            } 
            text-[13px] font-montserrat font-medium px-2.5 py-0.5 rounded `
            }>
              {quantity} in stock
          </span>
        </div>
      </div>

      <div className='mt-[20px] mb-2 flex justify-center gap-2.5'>
        <Button2 label='Shop now' iconURL={arrowRight} />
        <button className='flex justify-center items-center px-[18px] py-3 bg-white border-2 border-coral-red hover:border-btn-hov hover:bg-btn-hov rounded-xl'>
          <img
            src={addtocart}
            alt='add to cart icon'
          />
        </button> 
      </div>
    </div>
  );
};

export default PopularProductCard;