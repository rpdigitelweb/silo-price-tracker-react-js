import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ReactCardSlider from "react-card-slider-component";

const sliderClick = (slide) => {
  alert(`You clicked on ${slide.title}`);
};

// Custom inline style for title
const titleStyle = {
  textAlign: "center", // Centers the text horizontally
  fontSize: "18px", // Adjust the size if needed
  fontWeight: "bold", // Make the title bold
  padding: "10px 0", // Add padding for spacing
};

const slides = [
  {
    image:
      "https://api.silocloud.io/uploads/assets/marketplace/12852/thumbnail/1.jpg",
    title: <div style={titleStyle}>Noit Prism 5018 Cell Phone</div>,
  },
  {
    image:
      "https://api.silocloud.io/uploads/assets/marketplace/12852/thumbnail/16987296981_1.png",
    title: <div style={titleStyle}>Stereo Headphones</div>,
  },
  {
    image:
      "https://api.silocloud.io/uploads/assets/marketplace/12852/thumbnail/13.jpg",
    title: <div style={titleStyle}>RP-B7 Blood Pressure HR Watch</div>,
  },
  {
    image:
      "https://api.silocloud.io/uploads/assets/marketplace/12852/thumbnail/11.jpg",
    title: <div style={titleStyle}>Wireless Headset Magnetic Design</div>,
  },
  // {
  //   image: "https://picsum.photos/500/400",
  //   title: <div style={titleStyle}>This is a fourth title</div>,
  // },
  // {
  //   image: "https://picsum.photos/200/300",
  //   title: <div style={titleStyle}>This is a fifth title</div>,
  // },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZs5a-yfWclALMMN6TwT7UBcioIreIYHnVsVfAIqmxJulYDZBk0t44Z5GsTFFp_zzIwoTMV97Uvvj7o0Y8XPoAtdHkDpeFSzlKJrc7250hwuAS8IDQ80N0&usqp=CAE",
    title: <div style={titleStyle}>Samsung Galaxy A25 5G</div>,
  },
  {
    image:
      "https://api.silocloud.io/uploads/assets/marketplace/12852/thumbnail/16987296981_1.png",
    title: <div style={titleStyle}>Stereo Headphones</div>,
  },
];

const ListProducts = () => (
  <Container id="contato">
    <Row>
      <ReactCardSlider slides={slides} onClick={sliderClick} />
    </Row>
  </Container>
);

export default ListProducts;
