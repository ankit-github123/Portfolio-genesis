"use client";
import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { AppContext } from "@context/AppContext";
import Button from "@components/shared/Button";
import { BUTTON_VARIENT } from "@utils/constants";
// import * as Icons from "react-icons/fa6";

const IconSearch = (props) => {
  const { portfolio } = useContext(AppContext);
  console.log(portfolio, "portfolio");
  const [searchTerm, setSearchTerm] = useState("");
  const [select, setSelect] = useState("");
  const allIcons = { ...IoIcons, ...FaIcons, ...AiIcons };

  const iconContainer = (iconName) => {
    const Icon = allIcons[iconName];
    return (
      <div
        key={iconName}
        onClick={() => setSelect(iconName)}
        className={`icon_container box-show-main-spread cursor-pointer bg-secondary w-24 h-[5.5rem] flex flex-col justify-center m-1 border  rounded-md ${
          iconName === select ? "border-tertiary" : "border-lightest"
        }`}
      >
        <div className="flex justify-center">
          <Icon
            key={iconName}
            size={35}
            color={iconName === select && "#e24840"}
          />
        </div>
        <div
          className={`text-[9px] font-medium opacity-60 mt-2 flex justify-center mx-1.5 break-all leading-3 ${
            iconName === select ? "text-tertiary font-semibold" : "text-light"
          }`}
        >
          {iconName}
        </div>
      </div>
    );
  };

  const filteredIcons = Object.keys(allIcons)
    .filter((iconName) =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((iconName) => {
      return iconContainer(iconName);
    });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderTemplateIcons = (iconType) => {
    return Object.keys(allIcons)
      .slice(0, 80)
      .map((iconName) => {
        return iconContainer(iconName);
      });
  };

  const handleIconClick = () => {
    props.handleAddIcon(select);
  };
  return (
    <div className="sm:w-[86vw]">
      <div className="flex flex-wrap justify-center h-[55vh] overflow-scroll">
        <div className="w-[90%] sm:w-[93%] my-4">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-secondary w-full p-4 rounded-md border border-[rgba(255,255,255,0.15)]"
          />
        </div>
        {searchTerm !== "" ? { filteredIcons } : <>{renderTemplateIcons("")}</>}
      </div>
      <div className="flex justify-end mx-12 mt-4">
        <Button
          onClick={handleIconClick}
          variant={BUTTON_VARIENT.CONTAINED}
          label={"Insert icon"}
        />
      </div>
    </div>
  );
};

export default IconSearch;
