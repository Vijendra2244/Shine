import Applicants from "./Components/Applicants/Applicants";
import Comapny from "./Components/CompanyCool/Comapny";
import CopyRight from "./Components/Copyright/CopyRight";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import Remote from "./Components/RemoteJobs/Remote";
import Swiper from "./Components/Swiper/SwiperImage";
import Trending from "./Components/Trending/Trending";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Trending />
      <Navigation />
      <Swiper />
      <Comapny />
      <Applicants/>
      <Remote/>
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
