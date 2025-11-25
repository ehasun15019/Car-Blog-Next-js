import AllCategories from "@/Components/All-Categories/AllCategories";
import HomeHero from "@/Components/Hero/HomeHero";
import LatestBlogs from "@/Components/Latest-Blogs/LatestBlogs";
import NewTechnology from "@/Components/New-Technology/NewTechnology";
import Testimonial from "@/Components/Testimonial/Testimonial";
import UpComing from "@/Components/Up-Coming/UpComing";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <LatestBlogs />
      <NewTechnology />
      <AllCategories />
      <Testimonial />
      <UpComing />
    </div>
  );
}
