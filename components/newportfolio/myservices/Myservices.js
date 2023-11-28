"use client";
import React, { useState, useId } from "react";

import FormInputs from "./FormInputs";
import { useForm } from "react-hook-form";
import { servicesSchema } from "@utils/forms/services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { generateUniqueId } from "@utils/services";
import Button from "@components/shared/Button";
import { BUTTON_VARIENT } from "@utils/constants";
import { Skeleton } from "@mui/material";
const Myservices = () => {
  const [servicesCards, setServicesCard] = useState([]);
  const allIcons = { ...IoIcons, ...FaIcons, ...AiIcons };
  const methods = useForm({
    resolver: yupResolver(servicesSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      caption: "",
      serviceicon: "",
    },
  });
  console.log(methods, "methods1");
  const onhandlesubmit = (data) => {
    console.log(data, "formdata1");
    const card = { ...data, id: generateUniqueId() };
    setServicesCard((prevcards) => [...prevcards, card]);
    // methods.reset();
    // setPortfolio({ ...data });
  };
  console.log(servicesCards, "servicesCards");
  const handleRemoveCard = (id) => {
    const filteredCards = servicesCards.filter((c) => c.id !== id);
    setServicesCard([...filteredCards]);
  };
  return (
    <div className="relative">
      <form onSubmit={methods.handleSubmit(onhandlesubmit)}>
        <FormInputs {...methods} />
      </form>
      <div className="grid grid-cols-3 gap-6 h-[38vh] w-full overflow-scroll">
        {servicesCards.length > 0
          ? servicesCards?.map((servCard) => {
              const IconComponent = allIcons[servCard.serviceicon];
              return (
                <div
                  key={servCard.id}
                  className="h-44 my-4 px-4 relative w-full border border-lightest flex flex-col items-center justify-center bg-primary"
                >
                  <div
                    className="absolute -right-3 -top-3 rounded-full"
                    onClick={() => handleRemoveCard(servCard.id)}
                  >
                    <AiIcons.AiFillCloseCircle size={30} />{" "}
                  </div>
                  <div>
                    <IconComponent size={60} />
                  </div>
                  <div className="text-xl">{servCard.title}</div>
                  <div>{servCard.caption}</div>
                </div>
              );
            })
          : [].map(() => (
              <div className="h-[11rem] opacity-[0.6] my-4 px-4 relative w-full border border-lightest flex flex-col items-center justify-center bg-primary">
                <Skeleton
                  animation={"pulse"}
                  variant="circular"
                  height={55}
                  className="w-1/5 my-2"
                  sx={{ animationDuration: "20s" }}
                />
                <Skeleton
                  className="w-full"
                  animation={"pulse"}
                  variant="text"
                  sx={{ animationDuration: "20s" }}
                />
                <Skeleton
                  height={60}
                  className="w-full"
                  animation={"pulse"}
                  sx={{ animationDuration: "20s" }}
                  variant="text"
                />
                <div></div>
              </div>
            ))}
      </div>
      <div className="absolute -bottom-11 right-0">
        <Button label="submit" variant={BUTTON_VARIENT.CONTAINED} />
      </div>
    </div>
  );
};

export default Myservices;
