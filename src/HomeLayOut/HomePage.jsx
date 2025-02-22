import { Helmet } from "react-helmet";
import HomeSlider from "../Components/HomeSlider";
import SpecialSite from "../Components/SpecialSite";
import ReviewSection from "../Components/ReviewSection";
import Footer from "../Components/Footer";
import HomeSection1 from "../Components/HomeSection1";




const HomePage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Welcome to monalisa hotel </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
             
             <HomeSlider></HomeSlider>

             <SpecialSite></SpecialSite>

             <ReviewSection></ReviewSection>
             <HomeSection1></HomeSection1>

             
             <Footer></Footer>
        </div>
    );
};

export default HomePage;