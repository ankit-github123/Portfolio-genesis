"use client";
import NavElements from "@components/newportfolio/Nav/NavElements";
import { AppContext } from "@context/AppContext";
import React, { useContext } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";
import { Switch } from "@mui/material";
import NewNavElements from "@components/newportfolio/Nav/NewNavElements";
const SideNav = () => {
  const { session } = useContext(AppContext);
  console.log(session, "mysession");

  // const setDarkmode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "light");
  // };
  // setDarkmode();
  return (
    <div className="bg-secondary border-extralight relative rounded-md h-[96vh] box-shadow-main1 mx-3 mt-4">
      <Link
        href={"/newportfolio"}
        className="flex items-center gap-2 mx-2 mt-5 invisible"
      >
        <div className="w-16 h-16">
          <img src="/images/common/logo.svg" />
        </div>
        <div className="text-lg">Portfolio Genesis</div>
      </Link>
      <div className="my-2">
        <NewNavElements />
      </div>
      <div className="absolute bottom-0 flex   w-full justify-between items-center gap-4 text-sm opacity-70 px-4 py-3 bg-primary">
        <div className="flex gap-4 items-center">
          <img
            className="w-7 h-7 rounded-md"
            src={session?.user?.image}
            alt="portfolio genesis logo"
          />
          <div>{session?.user?.name}</div>
          <div>
            {/* <Switch
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            /> */}
          </div>
        </div>
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

export default SideNav;
// flex flex-col justify-center h-full w-full absolute top-0
