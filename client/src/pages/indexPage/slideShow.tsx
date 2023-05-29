import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../../images/slideshows/slide1.jpg';
import slide2 from '../../images/slideshows/slide2.jpg';
import slide3 from '../../images/slideshows/slide3.jpg';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
};

const slideImages = [
  {
    url: slide1,
    caption: 'Slide 1'
  },
  {
    url: slide2,
    caption: 'Slide 2'
  },
  {
    url: slide3,
    caption: 'Slide 3'
  }
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

// const Slideshow = () => (
//   <Carousel>
//     <Carousel.Item interval={1000}>
//       <img
//         // style={{width: "90%", height: "50%"}}
//         src={slide1}
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item interval={500}>
//       <img
//         // style={{width: "90%", height: "50%"}}
//         src={slide2}
//         alt="Third slide"
//       />
//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         // style={{width: "90%", height: "50%"}}
//         src={slide3}
//         alt="Third slide"
//       />
//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// );

export default Slideshow;
