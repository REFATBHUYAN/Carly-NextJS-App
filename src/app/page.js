import Banner from "@/components/home/Banner";
import Date from "@/components/home/Date";
import AboutUs from "@/components/home/AboutUs";
import OurServices from "@/components/home/OurServices";
import CustomerStisfactions from "@/components/home/CustomerStisfactions";
import OurCollections from "@/components/home/OurCollections";
import Testimonial from "@/components/home/Testimonial";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Date></Date>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <CustomerStisfactions></CustomerStisfactions>
      <OurCollections></OurCollections>
      <Testimonial></Testimonial>
      <Blog></Blog>
    </main>
  );
}
