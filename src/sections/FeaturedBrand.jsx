import { pumalogo, nikelogo, adidaslogo, newbalancelogo } from "../assets/images";

const FeaturedBrand = () => {
  return (
    <section id='featuredbrand' className='max-container'>
        <div className='flex flex-col justify-start gap-5'>
            <div className="flex flex-row justify-center tab:justify-between items-center mt-12">
                <h2 className='text-[20px] mm:text-[24px] tab:text-[31px] text-white-400 font-palanquin font-bold'>
                <span className='text-coral-red'> SneakerWave</span>'s Featured Brand
                </h2>
                <a href='#' className='font-montserrat hidden tab:flex font-medium text-lg text-white-400 hover:underline hover:text-coral-red'>
                Learn More
                </a>
            </div> 
            <div className="flex flex-col justify-center items-center gap-5 mt-6 mb-12 tab:mb-20">
                <div className="grid grid-cols-2 lap:grid-cols-4 justify-center items-center w-full gap-12 tab:gap-20 lap:gap-[150px]">
                    <img src={pumalogo}
                        alt="Puma Logo" 
                        border="0" 
                        className="w-[200px] h-[100px] justify-self-center"
                    />
                    <img src={adidaslogo}
                        alt="Adidas Logo" 
                        border="0" 
                        className="w-[152px] h-[100px] justify-self-center"
                    />
                    <img src={nikelogo}
                        alt="Nike Logo" 
                        border="0" 
                        className="w-[198px] h-[100px] justify-self-center"
                    />
                    <img src={newbalancelogo}
                        alt="New Balance Logo" 
                        border="0" 
                        className="w-[173px] h-[100px] justify-self-center"
                    />
                </div>
                
                    
            </div>  
        </div>
    </section>
  )
}

export default FeaturedBrand