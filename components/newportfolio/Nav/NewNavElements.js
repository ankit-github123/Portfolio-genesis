"use client";

import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavelementsData } from "./navElementsdata";
import { useRouter } from "next/navigation";

const NewNavElements = () => {
  const router = useRouter();
  const [allNavElements, setAllNavElements] = useState(NavelementsData);
  const navElementChange = (navElement) => {
    if (navElement.status !== "INACTIVE") {
      const tempNavElements = [...allNavElements];
      for (let i = 0; i < tempNavElements.length; i++) {
        if (tempNavElements[i].status === "ACTIVE") {
          tempNavElements[i].status = "COMPLETED";
        }
      }
      for (let i = 0; i < tempNavElements.length; i++) {
        if (tempNavElements[i].id === navElement.id) {
          tempNavElements[i].status = "ACTIVE";
        }
      }
      router.push(navElement.link);
      setAllNavElements([...tempNavElements]);
    }
  };
  const renderNavElement = (navEle) => {
    const Icon = navEle.icon;
    if (navEle.status === "ACTIVE") {
      return (
        <div className="flex justify-between w-[94%] pl-3 pr-4 m-auto items-center bg-lightest py-4 rounded-md">
          <div className="flex gap-3 items-center">
            <Icon size={22} />
            <div className="tracking-wide">{navEle.name}</div>
          </div>
          <div>
            <FaAngleRight size={18} />
          </div>
        </div>
      );
    }
    return (
      <div
        onClick={() => navElementChange(navEle)}
        className="flex justify-between w-[94%] pl-3 pr-4 m-auto items-center py-4 rounded-md text-lighter hover:bg-lightest"
      >
        <div className="flex gap-3 items-center">
          <Icon size={18} />
          <div className="tracking-wide">{navEle.name}</div>
        </div>
        <div>
          <FaAngleRight size={18} className="opacity-20" />
        </div>
      </div>
    );
  };
  return (
    <div className="w-full mt-4">
      {allNavElements.map((navEle) => renderNavElement(navEle))}
    </div>
  );
};

export default NewNavElements;
