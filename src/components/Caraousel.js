import useFetch from "../helpers/useFetch";
import ImageCarousel from "./ImageCarousel";
import WelcomeTitle from "./WelcomeTitle";

const Caraousel = () => {

    const {data: images} = useFetch('https://api.themoviedb.org/3/discover/movie');

    return ( 
        <div>
            <ImageCarousel images={images}/>
            <WelcomeTitle />
        </div>
     );
}
 
export default Caraousel;