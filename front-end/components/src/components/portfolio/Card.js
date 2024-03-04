import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AnimatedNumber from "react-animated-number";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
//this 2 header files countup and visibility are required for the counter to activate in particular component

import "../contact/contact-card.css"
const Card = (props) => {
      const [focus, setFocus] = useState(false);
      return (
            <div class="contact-box padd_counter">
                  <span class="icon-box background"><FontAwesomeIcon icon={props.icon} size="s"/></span>
                  <h4 style={{fontWeight:"0"}} class="title-box1">{props.content.title}</h4>
                  <div class="content-box">
                        <span className="count_text">
                        <CountUp style={{opacity:"0.75"}} start={focus ? 0 : null} end={props.content.count} duration={5} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a href='/' style={{color:"transparent",visibility:'hidden'}}>'</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
                        </span>
                        {/* <AnimatedNumber
                              value={12345}
                              style={{
                                    fontSize: "25px",
                                    color: "red"
                              }}
                              duration={2500}
                              formatValue={(n) => n.toFixed(0)}

                        /> */}
                        {/* <CountUp start={focus ? 0 : null} end={100} duration={5} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>+</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp> 
      //runs on focus
      */}
                  </div>
            </div>
      )
}

export default Card;

