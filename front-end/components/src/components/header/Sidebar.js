import React, { useState } from "react"
import { slide as Menu } from "react-burger-menu";

import { Link } from "react-scroll";
import "./header.css"
export default props => {
  const [state,setstate] = useState(false);
  return (
    // Pass on our props
    <Menu {...props} isOpen={ state }>
      {console.log(state)
      }
      <div onClick={()=>{setstate(false)}} className="logo_ham_header">
        Logo
      </div>
      <div>
      <Link  className="menu-item" to="about" spy={true} smooth={true}>
                About
              </Link>
            </div>
            <div className={"options"}>
              <Link className="menu-item" to="services" spy={true} smooth={true}>
              Services
              </Link>
            </div>
            <div onClick={()=>{setstate(false)}} className={"options"}>
              <Link  className="menu-item" to="resume" spy={true} smooth={true}>
                Resume
              </Link>
            </div>
            <div className={"options"}>
              <Link  className="menu-item" to="portfolio" spy={true} smooth={true}>
              Portfolio
              </Link>
            </div>
            <div className={"options"}>
              <Link  className="menu-item" to="blog" spy={true} smooth={true}>
                Blog
              </Link>
            </div>
            <div className={"options"}>
              <Link  className="menu-item" to="contact" spy={true} smooth={true}>
                Contact
              </Link>
      </div>
    </Menu>
  );
};
