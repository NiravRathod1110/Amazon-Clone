import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//comment for github
function Banner() {
  return (
    <div className="relative ">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
      <Carousel

        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={6000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/July/Unrec/TE_3000x1200._CB600178615_.jpg" alt="" />
        </div>
        <div>
            <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/Post/PD23/Unrec/PC_hero_1_2x._CB599886239_.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
