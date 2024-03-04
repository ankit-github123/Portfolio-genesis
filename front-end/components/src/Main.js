import React, { useState } from "react";

// import Header from "./components/header/Header"
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Contact from "./components/contact/Contact"
import Services from "./components/services/Services";
// import Resume from"./components/resume/Resume";
// import Work from "./components/portfolio/work/Work"
// import Counter from "./components/portfolio/Counter";
// import Testimonial from "./components/portfolio/Testimonial";
// import Blog from "./components/blog/Blog"
// import Footer from "./components/footer/Footer"
import { ScrollingElement } from "./index";
import "./app.css";
import "animate.css/animate.min.css";
const Main = () => {
  const [scrolly, setscrolly] = useState(Number);
  const scroll = (y) => {
    console.log(y);

    setscrolly(y);
  };
  return (
    <div>
      <ScrollingElement />
      {/* <Header scroll={scroll}/> */}
      <Home scrolly={scrolly} />
      <About />
      <Services />
      {/* <Resume/> */}
      {/* <Work/> */}
      {/* <Counter/> */}
      {/* <Testimonial/> */}
      {/* <Blog/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
