import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slides = [
    { id: 0, url: process.env.PUBLIC_URL + "/images/IMG_1.jpg", title: 'SF Lombard Street' },
    { id: 1, url: process.env.PUBLIC_URL + "/images/IMG_2.jpg", title: 'Alaska Seward' },
    { id: 2, url: process.env.PUBLIC_URL + "/images/IMG_3.jpg", title: 'Alaska Box Canyon Creek' },
    { id: 3, url: process.env.PUBLIC_URL + "/images/IMG_4.jpg", title: 'Alaska Seward' },
    { id: 4, url: process.env.PUBLIC_URL + "/images/IMG_5.jpg", title: 'AZ Antelope Canyon' },
    { id: 5, url: process.env.PUBLIC_URL + "/images/IMG_6.jpg", title: 'LA Venice Beach' },
  ];

  return (
    <Carousel className='about-carousel' activeIndex={index} onSelect={handleSelect}>
      {
        slides.map(slide => (
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={slide.url}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{slide.title}</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default ControlledCarousel;
