import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ReactCardSlider from "react-card-slider-component";
import "./assets/css/style.css";

const titleStyle = {
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
  padding: "10px 0",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "300px",
  width: "200px",
  margin: "10px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  overflow: "hidden",
  textAlign: "center",
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
  {
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZs5a-yfWclALMMN6TwT7UBcioIreIYHnVsVfAIqmxJulYDZBk0t44Z5GsTFFp_zzIwoTMV97Uvvj7o0Y8XPoAtdHkDpeFSzlKJrc7250hwuAS8IDQ80N0&usqp=CAE",
    title: <div style={titleStyle}>Samsung Galaxy A25 5G</div>,
  },
];

const sliderClick = (slide) => {
  alert(`You clicked on ${slide.title}`);
};

const ListProducts = () => (
  <Container id="contato">
    <Row>
      {/* <div id="main-slider-container" style={{ width: "0%" }}> */}
      <ReactCardSlider
        slides={slides}
        onClick={sliderClick}
        cardStyle={cardStyle}
      />
      {/* </div> */}
    </Row>
  </Container>
);

export default ListProducts;
