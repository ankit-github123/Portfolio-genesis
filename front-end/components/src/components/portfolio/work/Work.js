import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { img , back} from "./Text"
import "./work.css"
const Work = () => {
      const cardO = img.map((item, index) => {
            return <div key={index} className="col-lg-4 port_pic">
                  <div class="content">
                        {/*  eslint-disable-next-line */}
                        
                              <div class="content-overlay"></div>
                              <div className="work_img_container">
                              <img class="content-image" alt="card" src={item.img} /></div>
                              <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">{item.title}</h3>
                                    {/* <p class="content-text">This is a short description</p> */}
                              </div>
                        
                  </div>

            </div>
      })
      const cardB = back.map((item, index) => {
            return <div key={index} className="col-lg-4 port_pic">
                  <div class="content">
                        {/*  eslint-disable-next-line */}
                        
                              <div class="content-overlay"></div>
                              <div className="work_img_container">
                              <img class="content-image" alt="card" src={item.img} /></div>
                              <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">{item.title}</h3>
                                    {/* <p class="content-text">This is a short description</p> */}
                              </div>
                        
                  </div>

            </div>
      })
      return (
            <div id="portfolio" className="work_main  common_pad_left common_pad_right">
                  <div className="services_title">
                        <h6 className={"color"} > My Recent Works</h6> <h1>My Portfolio </h1> <div className="border_botton_red" > </div>
                  </div>
                  <div>
                        <Tabs>
                              <div className="work_tablist">
                                    <TabList>
                                          <Tab>ALL</Tab>
                                          <Tab>FRONT END</Tab>
                                          <Tab>BACK END</Tab>
                                          <Tab>DESIGNING</Tab>
                                    </TabList>
                              </div>
                              <TabPanel>
                                    <div className="row">
                                          {cardO}
                                    </div>
                              </TabPanel>
                              <TabPanel>
                              <div className="row">
                                          {cardO}
                                    </div>
                              </TabPanel>
                              <TabPanel>
                              <div className="row">
                                          {cardB}
                                    </div>
                              </TabPanel>
                        </Tabs>
                        );
                  </div>
            </div>
      )
}

export default Work;
