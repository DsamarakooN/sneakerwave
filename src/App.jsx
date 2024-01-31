import {CustomerReviews , Footer , Hero , PopularProducts , FeaturedBrand, Services , SpecialOffer , Subscribe , SuperQuality} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px]">
      <Hero/>
    </section>
    <section className="px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px]">
      <PopularProducts/>
    </section>
    <section className="bg-primary-b mt-12 px-[20px] mm:px-[20px]  ml:px-[20px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px]">
      <FeaturedBrand/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;