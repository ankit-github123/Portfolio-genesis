import React from "react";
import Card from "./Card";
import ScrollAnimation from "react-animate-on-scroll";
import { counterText } from "./Text"
import "./counter.css"
const Counter = () => {
      const card = counterText.map((item) => {
            return <div className="col-lg-3 c1"><ScrollAnimation
            animateIn="slideInUp"
            duration={2}
            animateOnce={true}
            delay={item.delay}
      ><Card content={item} icon={item.icon} /></ScrollAnimation></div>
            
      })
      return (
            <div className="counter_frame">
                  <div className="container-fluid">
                        <div className="card_count_holder common_pad_left common_pad_right row">
                              {card}
                        </div>
                  </div>
            </div>
      )
}

export default Counter;