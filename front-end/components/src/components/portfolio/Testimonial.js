import React from "react";
import Slider from "./Slick"
import "./testimonial.css"
const Testimonial = () => {
      return (
            <div className='testimonial_main '>
                  <div className="services_title common_pad_left common_pad_right">
                        <h6 className={"color"} > Happy Clients</h6> <h1> Testimonial </h1> <div className="border_botton_red" > </div>
                  </div>
                  <div className="slider_outer_container">
                        <div>
                              <Slider />
                        </div>
                        
                  </div>
            </div>
      )
}

export default Testimonial;