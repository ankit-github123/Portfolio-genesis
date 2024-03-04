import React from "react";
import { text } from "./Text";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./services.css";
const Services = () => {
  const Card = text.map((item, index) => {
    return (
      <div key={index} className="col-span-1">
        <ScrollAnimation
          animateIn="slideInUp"
          duration={2}
          animateOnce={true}
          delay={item.delay}
        >
          <div className="service_card">
            <div className="service_icon">
              <FontAwesomeIcon size="4x" icon={item.img} />
            </div>
            <div className="service_card_label">
              <h2>{item.label}</h2>
              <div>{item.desc}</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  });
  return (
    <div
      id="services"
      className="services_main common_pad_left common_pad_right"
    >
      <ScrollAnimation
        animateIn="fadeIn"
        duration={2}
        animateOnce={true}
        delay={100}
      >
        <div className="services_title">
          <h6 className={"color"}> What I do</h6> <h1> My Services </h1>{" "}
          <div className="border_botton_red"> </div>
        </div>
      </ScrollAnimation>
      <div className="services_card_container">
        <div className="grid grid-cols-3">{Card}</div>
      </div>
    </div>
  );
};

export default Services;
