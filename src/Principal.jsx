import React from "react";

import BlackFriday from "./assets/img/black-friday.svg";
import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import TypeProducts from "./components/TypeProducts";

export default function Principal() {
  return (
    <>
      <div className="bg-light container">
        {/* <Emphasis /> */}
        <Menu />
      </div>
      <Slider />
      <TypeProducts />

      <div className="bloco-post" id="promocoes">
        <div className="post1">
          <img
            src="https://kanobetriss.com/images/headphone/image-2.jpg"
            alt="banner Black Friday"
          />
        </div>

        <div className="post2" style={{ textAlign: "justify" }}>
          <p>
            Let the melodies embrace you, as the music becomes a seamless part
            of your journey. With every note, let the rhythm elevate your
            soul.Immerse yourself in effortless control with our headphones
            designed for a natural feel. The tactile, user-friendly interface
            ensures that managing your audio experience is not only intuitive
            but also a delight. Navigate through your music or calls seamlessly.
          </p>
        </div>
      </div>

      <div className="bloco-post mt-5 p-5">
        <div className="post2" style={{ textAlign: "justify" }}>
          <p>
            Immerse yourself in effortless control with our headphones designed
            for a natural feel. The tactile, user-friendly interface ensures
            that managing your audio experience is not only intuitive but also a
            delight. Navigate through your music or calls seamlessly.
          </p>
        </div>
        <div className="post1">
          <img
            src="https://kanobetriss.com/images/tabs-pills/slider2.png"
            alt="banner Black Friday"
          />
        </div>
      </div>

      <Newsletter />
      <ListProducts />
      <Footer />
    </>
  );
}
