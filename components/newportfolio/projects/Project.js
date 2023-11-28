"use client";

import React, { useEffect, useState } from "react";
import NewTabProject from "./NewTabProject";
import { Tab, Tabs } from "@mui/material";
import { RoundedTab, RoundedTabGroup } from "@utils/customhook/roundedTabs";
import SectionTabs from "./SectionTabs";
const Project = () => {
  const [tabName, setTabName] = useState([
    // {
    //   tabname: "sdf",
    //   tabId: "1699866917845-119",
    // },
    // {
    //   tabname: "sdf1",
    //   tabId: "1699866919530-616",
    // },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabFunction = () => {
    console.log("renderTabFunction", tabName);
    if (tabName.length >= 1) {
      const allTabs = [{ tabname: "All", tabId: "all" }, ...tabName];
      return (
        <div>
          <RoundedTabGroup defaultTabName="all">
            {/* <RoundedTab name="all1" title="All">
              <div>sdf</div>
            </RoundedTab> */}
            {allTabs.map((tb) => (
              <RoundedTab name={tb.tabId} title={tb.tabname}>
                <div className="mt-5">
                  <SectionTabs tabs={allTabs} tabId={tb.tabId} />
                </div>
              </RoundedTab>
            ))}
          </RoundedTabGroup>
        </div>
      );
    }
  };
  return (
    <div>
      <div className="relative border-2 border-lightest border-dashed text-lighter font-medium text-base leading-8 text-justify pb-10 pt-7 px-10">
        <div className="flex text-3xl font-semibold mb-5 tracking-wide instructions-title-gradient">
          Instructions
          {/* <img src="/videos/sparkle.gif" className="mix-blend-o" /> */}
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          tincidunt dui ut ornare lectus sit. Viverra ipsum nunc aliquet
          bibendum enim facilisis. Vel turpis nunc eget lorem dolor. Nisl purus
          in mollis nunc sed id semper. Eget felis eget nunc lobortis mattis
          aliquam faucibus purus. Montes nascetur ridiculus mus mauris vitae
          ultricies leo integer. Faucibus pulvinar elementum integer enim. Morbi
          enim nunc faucibus a pellentesque sit amet porttitor. Viverra ipsum
          nunc aliquet bibendum enim facilisis gravida neque. Hendrerit gravida
          rutrum quisque non. Faucibus interdum posuere lorem ipsum. In eu mi
          bibendum neque egestas congue quisque. Consequat id porta nibh
          venenatis. Nec sagittis aliquam malesuada bibendum arcu.
        </div>

        <div className="absolute top-14 right-0 flex justify-center h-[17rem] opacity-5 ">
          {/* <img src="/images/newprofile/project.png" /> */}
        </div>
      </div>
      {renderTabFunction()}
      <div>
        <NewTabProject tabName={tabName} setTabName={setTabName} />
      </div>
    </div>
  );
};

export default Project;
