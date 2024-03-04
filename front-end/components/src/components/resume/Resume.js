import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./resume.css"
import Card from "./ResCard"

import { text } from "./Text";

const Resume = () => {
      const resCard = text.map((item, index) => {
            return <div key={index} className="col-lg-6">
                  <ScrollAnimation
                        animateIn="fadeIn"
                        duration={2}
                        animateOnce={true}
                        delay={item.delay}
                  >
                        <Card content={item} icon={item.icon} />
                  </ScrollAnimation>
            </div>
      })
      return (
            <div id="resume" className="resume_main common_pad_left common_pad_right">
                  <ScrollAnimation
                        animateIn="fadeIn"
                        duration={2}
                        animateOnce={true}
                        delay={100}
                  >
                        <div className="services_title">
                              <h6 className={"color"} > My Awesome Story</h6> <h1> My Resume </h1> <div className="border_botton_red" > </div>
                        </div>
                  </ScrollAnimation>
                  <div>
                        <div className="row">
                              {resCard}
                        </div>
                  </div>
            </div>
      )
}

export default Resume;