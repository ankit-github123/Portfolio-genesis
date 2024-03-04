import React, { useState } from "react";
import { text } from "./Text";
import ScrollAnimation from "react-animate-on-scroll";
import "./blog.css"
const Blog = () => {

      const [color,setcolor] =useState({pos:false,id:null})

      const card = text.map((item) => {
            return <div className="col-lg-4 col-md-4 col-sm-12">
                  <ScrollAnimation
                        animateIn="slideInUp"
                        duration={2}
                        animateOnce={true}
                        delay={item.delay}
                  >
                        <div className="blog_card">
                              <div class="zoom-effect-container">
                                    <div class="image-card">
                                          <img src={item.img} alt="hover move" />
                                    </div>
                              {/* </div> */}
                              <div className="blog_text">
                                    <div className="blog_title_container">
                                          <a style={{textDecoration:"none"}} rel="noopener noreferrer" target='_blank' href={item.link}><h3 style={color.pos && item.id===color.id?{color:"#e24840",transitionDuration:"0.6s"}:null} className="hover_title">
                                               {item.title}
                              </h3></a>
                                          <h6>thank you</h6>
                                    </div>
                                    <div className="blog_desc"  onMouseEnter={()=>{setcolor({...color,pos:true,id:item.id})}} onMouseLeave={()=>{setcolor({...color,pos:false,id:item.id})}}>
                                          <p>
                                               {`${item.content.slice(0,150)} ...`}
                                               <div style={{display:"flex",marginTop:"8px"}}>
                                   <div className="dash_blog">

                                   </div>
                                   <div className="read_more_blog">
                                         <a  rel="noopener noreferrer" target='_blank' href={item.link}> Read More</a>
                                   </div>
                              </div>
                              </p>
                              
                                    </div>
                                    </div>
                              </div>
                        </div>
                  </ScrollAnimation>
            </div>
      })
      return (
            <div id="blog" className="blog_main common_pad_left common_pad_right">
                  <ScrollAnimation
                        animateIn="fadeIn"
                        duration={2}
                        animateOnce={true}
                        delay={100}
                  >
                        <div className="services_title">
                              <h6 className={"color"} > Latest Posts</h6> <h1> My Blog </h1> <div className="border_botton_red" > </div>
                        </div>
                  </ScrollAnimation>
                  <div>
                        <div className="row">
                              {card}
                        </div>

                  </div>
            </div>
      )
}

export default Blog;