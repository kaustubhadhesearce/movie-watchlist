import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({images}) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
    
        return () => clearInterval(intervalId);
    }, [images]);


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className='image-carousel'>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" 
            src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`}  
            alt={`Slide ${i + 1}`} 
            style={{ maxHeight: '700px', margin: '0 auto'}}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
 
export default ImageCarousel;