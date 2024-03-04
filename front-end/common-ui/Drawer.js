import React from "react";
import PropTypes from "prop-types";
import "../styles/drawer.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Projectsform, projectSchema } from "@utils/forms/projects";
import Field from "@components/shared/Field";
import Button from "@components/shared/Button";
import { BUTTON_VARIENT } from "@utils/constants";
export const Drawer = (props) => {
  const { open, anchor, onClose, content } = props;
  const methods = useForm({
    resolver: yupResolver(projectSchema),
    mode: "onBlur",
    defaultValues: {
      tabname: "",
    },
  });

  const handleTabSubmit = (data) => {
    console.log("tabdata1", data);
  };
  return (
    <>
      <div
        className={`drawer_overlay ${!open && "drawer_overlayHidden"} ${
          open && "drawer_overlayOpen"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex="-1"
        className={`drawer_main bg-primary ${open && "drawer_animate"} ${
          !open && "drawer_hidden"
        } ${"drawer_right"}`}
      >
        <div className={"drawer_header"} />
        <div className="drawer_body">{content}</div>

        <Button
          onClick={methods.handleSubmit(handleTabSubmit)}
          variant={BUTTON_VARIENT.CONTAINED}
          className="w-full"
          label="Submit"
        ></Button>
      </div>
    </>
  );
};
