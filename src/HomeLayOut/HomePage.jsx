import { Helmet } from "react-helmet";
import HomeSlider from "../Components/HomeSlider";
import SpecialSite from "../Components/SpecialSite";



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
        </div>
    );
};

export default HomePage;