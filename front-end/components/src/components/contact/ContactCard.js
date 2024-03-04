import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./contact-card.css"
const ContactCard = (props) => {
      return (
            <div class="contact-box ">
                  <span class="icon-box background"><FontAwesomeIcon icon={props.icon}/></span>
                  <h4 class="title-box">{props.content.title}</h4>
                  <div class="content-box">
                        <p>{props.content.label1}</p>
                        <p>{props.content.label2}</p>
                  </div>
            </div>
      )
}

export default ContactCard;