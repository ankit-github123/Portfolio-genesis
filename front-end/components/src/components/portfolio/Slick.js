import React from "react";
import Slider from "react-slick";
import {text} from "./Text"
import img from "../../images/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import "./testimonial.css"
export default function SimpleSlider() {
       const setting = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
            // responsive: [
            //   {
            //     breakpoint: 1024,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1,
            //       infinite: true
            //     }
            //   },
            //   {
            //     breakpoint: 768,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 2,
            //       initialSlide: 2,
            //       infinite: true
            //     }
            //   },
            //   {
            //     breakpoint: 480,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 2,
            //       infinite: true
            //     }
            //   }
            // ]
          };
      // const slides = text.map((item)=>{

      //       return      <div className="slide_main">
      //       <div className="slide_title">
      //             <div style={{display:"flex"}}>
      //                   <div className="slide_img">
      //                         <img src={img} alt="profile" />
      //                   </div>
      //                   <div className="slide_text">
      //                         <h3>RAZON SMITH</h3>
      //                         <h5>SEO Developer</h5>
      //                   </div>
      //             </div>
      //             <div className="icon_slide">
      //                   <FontAwesomeIcon icon={faQuoteRight} style={{color:"#24283D"}} size='5x'/>
      //             </div>
      //       </div>
      //       <div className="slide_desc">
      //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      //       </div>
      // </div>
      // })
      return (
            <div className="sliderMargin">
          <Slider {...setting} className="slidermargin" >
            {text.map((item, id) => {
              return (
                <div className="backSlick">
                <div className="slide_main">
            <div className="slide_title">
                  <div style={{display:"flex"}}>
                        <div className="slide_img">
                              <img src={item.img} alt="profile" />
                        </div>
                        <div className="slide_text">
                              <h3>{item.title}</h3>
                              <h5>{item.designation}</h5>
                        </div>
                  </div>
                  <div className="icon_slide">
                        <FontAwesomeIcon icon={faQuoteRight} style={{color:"#24283D"}} size='5x'/>
                  </div>
            </div>
            <div className="slide_desc">
                  <p>{item.content}</p>
            </div>
      </div>
                </div>
              );
            })}
          </Slider>
        </div>
      );
}