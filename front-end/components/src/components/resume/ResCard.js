import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./resume.css"
const ResCard = (props) => {
      return (
            <div className="contact-res-box ">
                  <span className="icon-box background"><FontAwesomeIcon icon={props.icon}/></span>
                  <h4 className="title-res-box">{props.content.title}</h4><br/>
                  <h4 style={{fontWeight:"200",marginBottom:"14px"}} className="title-res-box"><span className="res_card_date">{props.content.date}</span>{`  |  `}<span className="res_card_spec">{props.content.speciality}</span></h4>
                  <div className="content-box">
                        <p className="res_card_desc">{props.content.desc}</p>
                        
                  </div>
            </div>
      )
}

export default ResCard;