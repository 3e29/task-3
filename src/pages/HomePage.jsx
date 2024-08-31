import Contact from "../components/Contact";
import Deals from "../components/Deals";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Video from "../components/Video";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Video />
      <Deals />
      <Properties />
      <Contact />
    </>
  );
};
export default HomePage;
