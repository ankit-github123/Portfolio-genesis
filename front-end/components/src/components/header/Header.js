import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import { Link } from "react-scroll";
// import SideBar from "./Sidebar";
import logo from "../../images/logonew.svg"
// import logo1 from "../../images/logomob.svg"
import "./header.css";
import "./styles.css"

const Header = ({scroll}) => {
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    scroll(scrollY)
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const navItems = [
    <div>
      <div className="logo_ham_header">
      <h3 className="logo_style_nav"><img style={{cursor:"-moz-grab"}} src={logo} alt="a"/></h3>
      </div>
      <div  className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="home" spy={true} smooth={true}>
          Home
              </Link>
      </div>
      <div  className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="about" spy={true} smooth={true}>
          About
              </Link>
      </div>
      <div className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="services" spy={true} smooth={true}>
          Services
              </Link>
      </div>
      <div className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="resume" spy={true} smooth={true}>
          Resume
              </Link>
      </div>
      <div className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="portfolio" spy={true} smooth={true}>
          Portfolio
              </Link>
      </div>
      <div className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="blog" spy={true} smooth={true}>
          Blog
              </Link>
      </div>
      <div className={"options1"}>
        <Link onClick={() => { setShowNav(false) }} className="menu-item" to="contact" spy={true} smooth={true}>
          Contact
              </Link>
      </div>
    </div>
  ];

  return (
    <div className="outer">

      <div className={scrollY <= 10 ? "header " : "header active1"}>
        <div className="header_in">
          <div className="space_div">
          <div className="ham-contanier" onClick={() => setShowNav(true)}>
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
            </div>

          </div>
          <div className="header_op_div">
            <div className="logo_div">
            <Link to="home" spy={true} smooth={true}><h3 className={scrollY<=25?"logo_style":"logo_style_scroll"}><img style={{cursor:"-moz-grab"}} src={logo} alt="a"/></h3>
            {/* <h3 className={scrollY<=25?"logo_style1":"logo_style_scroll1"}><img style={{cursor:"-moz-grab"}} src={logo1} alt="a"/></h3> */}
            </Link>
            </div>
            <div className="options_div">
              <div className={"options"}>
                <Link onClick={() => { setShowNav(false) }} activeClass="active" to="home" spy={true} smooth={true}>
                  Home{}
                </Link>
              </div>
              <div onClick={() => { setShowNav(false) }} className={"options"}>
                <Link to="about" spy={true} smooth={true}>
                  About
              </Link>
              </div>
              <div className={"options"}>
                <Link to="services" spy={true} smooth={true}>
                  Services
              </Link>
              </div>
              <div className={"options"}>
                <Link to="resume" spy={true} smooth={true}>
                  Resume
              </Link>
              </div>
              <div className={"options"}>
                <Link to="portfolio" spy={true} smooth={true}>
                  Portfolio
              </Link>
              </div>
              <div className={"options"}>
                <Link to="blog" spy={true} smooth={true}>
                  Blog
              </Link>
              </div>
              <div className={"options"}>
                <Link to="contact" spy={true} smooth={true}>
                  Contact
              </Link>
              </div>
            </div>
          </div>
          <div className="space_div">
            
            <div id="side" className="side_bar_menu">
              {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"side"} /> */}
              <SideNav
                openFromLeft={true}
                showNav={showNav}
                onHideNav={() => setShowNav(false)}
                navStyle={{ width: "28rem", backgroundColor: "#1f2233" }}
                title=""
                items={navItems}
                titleStyle={{
                  backgroundColor: "#1f2233",
                  padding: "0rem 0px",
                  color: "white",
                  fontSize: "0px",
                  lineHeight: "0"
                }}
                itemStyle={{ backgroundColor: "#1f2233", listStyle: "none", padding: "0",
                // margin:"0px -27px"
               }}
                itemHoverStyle={{ backgroundColor: "inherit" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
