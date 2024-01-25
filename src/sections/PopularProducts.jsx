import { products } from "../constants";
import  PopularProductCard  from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container mt-16 '>
      <div className='flex flex-col justify-start gap-5'>
        <div className="flex flex-row justify-between items-center">
          <h2 className='text-4xl text-primary-b font-palanquin font-bold'>
            <span className='text-coral-red'> SneakerWave</span>'s Popular Products
          </h2>
          <a href='#' className='black-black-primary font-montserrat font-medium text-lg hover:underline hover:text-coral-red'>
            View more
          </a>
        </div>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;