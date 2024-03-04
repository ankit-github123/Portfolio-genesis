import React from "react";
import Rating from "@mui/material/Rating";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@mui/material/Typography";
// import { Link,Router } from "react-router-dom";
import pic from "../../images/random.jpg";
// import PDF from "./AnkitKumar_Resume.pdf"
import { FaRegStar as StarBorderIcon } from "react-icons/fa";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import { AboutData } from "../json/ankitJson/About";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <ScrollAnimation
              animateIn="slideInLeft"
              animateOut="fadeOut"
              duration={1.0}
              animateOnce={true}
              delay={0.5}
            >
              <div className="profileImg_wrap">
                <img src={pic} alt="img" className="profileImg" />
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <ScrollAnimation
              animateIn="fadeIn"
              duration={1.5}
              animateOnce={true}
              delay={100}
            >
              <div className="services_title" style={{ padding: "0" }}>
                <h6 className={"color"}> Who Am I</h6> <h1> About Me </h1>{" "}
                <div className="border_botton_red"> </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="slideInUp"
              duration={1.5}
              animateOnce={true}
              delay={100}
            >
              <div className="about_data">
                I am a B.E (Computer science) graduate completed in 2019.
                Working on ReactJs Front-end development since 1.5 year. I build
                websites and help business in order to grow and get started. I
                mostly work on business websites and like Illustrating.
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="slideInUp"
              duration={2}
              animateOnce={true}
              delay={800}
              afterAnimatedIn={() => {
                console.log("hello");
              }}
            >
              <div className="about_proficiency">
                {AboutData
                  ? AboutData.map((item, i) => {
                      return (
                        <div key={i} className="about_proficiency_item">
                          <Typography component="legend">
                            {item.lang}
                          </Typography>
                          <Rating
                            readOnly
                            value={item.value}
                            defaultValue={2}
                            precision={0.5}
                            size="large"
                            emptyIcon={
                              <StarBorderIcon
                                fontSize="inherit"
                                className="star_border"
                              />
                            }
                          />
                          {/* <Rating precision={0.5} name="read-only" value={item.value} style={{fontSize:"16px"}} readOnly /> */}
                        </div>
                      );
                    })
                  : null}
              </div>
            </ScrollAnimation>
            {/*  eslint-disable-next-line */}
            <a target="_blank">
              <button className="about_resumeBtn">download cv</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
