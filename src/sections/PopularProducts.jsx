import { products } from "../constants";
import  PopularProductCard  from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container mt-16'>
      <div className='flex flex-col justify-start gap-5'>
        <div className="flex flex-row justify-center tab:justify-between items-center">
          <h2 className='text-[20px] tab:text-[31px] text-primary-b font-palanquin font-bold'>
            <span className='text-coral-red'> SneakerWave</span>'s Popular Products
          </h2>
          <a href='#' className='font-montserrat hidden tab:flex font-medium text-lg text-primary-b hover:underline hover:text-coral-red'>
            View more
          </a>
        </div>
      </div>

      <div className='mt-8 grid lap:grid-cols-4 tab:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;