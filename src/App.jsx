import {CustomerReviews , Footer , Hero , PopularProducts , FeaturedBrand, Services , SpecialOffer , Subscribe , SuperQuality} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px]">
      <Hero/>
    </section>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px] py-10">
      <PopularProducts/>
    </section>
    <section className="bg-primary-b my-10 px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px] ">
      <FeaturedBrand/>
    </section>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px]">
      <SuperQuality/>
    </section>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px] py-10">
      <Services/>
    </section>
    <section className="bg-primary-b my-10">
      <SpecialOffer/>
    </section>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px] py-10">
      <CustomerReviews/>
    </section>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px] py-0 tab:py-10">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t mt-12 ">
      <Footer/>
    </section>
  </main>
)

export default App;