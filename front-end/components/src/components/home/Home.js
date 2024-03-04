import React, { useState } from "react";
import ReactRoate from "react-rotating-text";
import { Link } from "react-scroll";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleUp} from '@fortawesome/free-solid-svg-icons'
// import { Typewriter } from 'react-typewriting-effect';
// import 'react-typewriting-effect/dist/index.css'
import profile from "../../images/profile3.jpg";
import "./home.css";

const Home = ({ scrolly }) => {
  const [color, setcolor] = useState(false);
  return (
    <div id="home" className="home">
      {/* <Header /> */}

      <div className="home_mid">
        <div className="profile">
          <img
            className="profile_img"
            src={"website/profile3.jpg"}
            alt="profile"
          />
        </div>
        <div className="title color ">
          <h1>ANKIT KUMAR</h1>
        </div>
        <div className="desc color_white">
          {/* A Creative Freelancer & Full Stack Developer */}
          <ReactRoate
            items={["A Creative Freelancer & Full Stack Developer"]}
          />
          {/* <Typewriter string='A Creative Freelancer & Full Stack Developer' delay={10} /> */}
        </div>
      </div>
      {scrolly <= 10 ? (
        <div>
          <div class="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
      <div className="home_end_container">
        <div></div>
        {scrolly >= 10 ? (
          <Link to="home" spy={true} smooth={true}>
            <div
              className="move_to_top"
              onMouseEnter={() => setcolor(true)}
              onMouseLeave={() => {
                setcolor(false);
              }}
            >
              <span
                className="arrow_top"
                style={color ? { color: "#e24840" } : null}
              >
                {/* <FontAwesomeIcon icon={faAngleUp} size="2x"/> */}
              </span>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
