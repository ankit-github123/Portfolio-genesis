import React from "react";
import img from "../../images/logonew.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./footer.css"
const Footer = () => {
      return (
            <div className="footer_main">
                  <div className="footer_container">
                        <div className="footer_logo_container">
                              <img src={img} alt="footer_logo"/>
                        </div>

                        <div className="social_container">
                              <div className="circle"><a
                                    // eslint-disable-next-line
                                    target="_blank" href='https://www.facebook.com/profile.php?id=100007148380703'><span><FontAwesomeIcon icon={faFacebookSquare} /></span></a></div>
                              {/* eslint-disable-next-line */}
                              <div className="circle"><a
                                    // eslint-disable-next-line
                                    target="_blank"

                                    href=''><span><FontAwesomeIcon icon={faTwitter} /></span></a></div>
                              <div className="circle"><a
                                    // eslint-disable-next-line
                                    target="_blank" href='https://www.instagram.com/be_a_nandan/'><span><FontAwesomeIcon icon={faInstagram} /></span></a></div>
                              <div className="circle"><a
                                    // eslint-disable-next-line
                                    target="_blank" href='https://www.linkedin.com/in/ankit-kumar-324631144/'><span><FontAwesomeIcon icon={faLinkedin} /></span></a></div>
                              <div className="circle"><span style={{ fontSize: "22px", left: "5px", top: "2px" }}><FontAwesomeIcon icon={faYoutube} /></span></div>
                        </div>
                        <div className="footer_desc">
                              <div className="footer_desc_info">
                                    All Right Reserved © 2021  <span style={{ color: "#e24840", paddingLeft: "4px" }}>{` AK Portfolio`}</span>
                              </div>
                        </div>
                  </div>
            </div>

      )
}

export default Footer;