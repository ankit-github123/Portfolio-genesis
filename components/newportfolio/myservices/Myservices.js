"use client";
import React, { useState } from "react";
import FormInputs from "./FormInputs";
import { useForm } from "react-hook-form";
import { servicesSchema } from "@utils/forms/services";
import { yupResolver } from "@hookform/resolvers/yup";

const Myservices = () => {
  const [servicesCards, setServicesCard] = useState([]);

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
    const card = { ...data, id: `servicecard${servicesCards.length + 1}` };
    setServicesCard((prevcards) => [...prevcards, card]);
    methods.reset();
    // setPortfolio({ ...data });
  };
  return (
    <div>
      <form onSubmit={methods.handleSubmit(onhandlesubmit)}>
        <FormInputs {...methods} />
      </form>
      <div>
        {servicesCards.map((servCard) => {
          return (
            <div>
              <div>{servCard.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myservices;
