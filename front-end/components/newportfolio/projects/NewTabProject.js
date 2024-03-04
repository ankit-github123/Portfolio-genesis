import React, { useCallback, useState } from "react";
import { useDrawer, useModal } from "@utils/customhook/modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { tabnameForm, tabnameSchema } from "@utils/forms/projects";
import Field from "@components/shared/Field";
import Button from "@components/shared/Button";
import { BUTTON_VARIENT } from "@utils/constants";
import { Drawer } from "@common-ui/Drawer";
import { generateUniqueId } from "@utils/services";
import { styled } from "@mui/material";
import CustomDatePicker from "@components/shared/DatePicker";

const tabContent = (methods, tabName, setTabName, hideModal) => {
  const handleTabSubmit = (data) => {
    setTabName((tb) => [...tb, { ...data, tabId: generateUniqueId() }]);
    hideModal();
  };
  return (
    <div className="w-[40vw]">
      {tabnameForm.map((profile) => {
        return (
          <div key={profile.name} className={`${profile.propertystyle}`}>
            <Field
              {...profile}
              {...methods}
              errors={methods.formState.errors}
            />
          </div>
        );
      })}

      <div className="flex justify-center mt-5">
        <Button
          onClick={methods.handleSubmit(handleTabSubmit)}
          variant={BUTTON_VARIENT.CONTAINED}
          className=""
          label="Submit"
        ></Button>
      </div>
    </div>
  );
};

const NewTabProject = (props) => {
  const { tabName, setTabName } = props;
  const { ModalComponent, showModal, hideModal } = useModal();
  const { handleOpen, handleClose, DrawerComponent } = useDrawer();
  const methods = useForm({
    resolver: yupResolver(tabnameSchema),
    mode: "onBlur",
    defaultValues: {
      tabname: "",
    },
  });

  return (
    <div>
      <button onClick={showModal}>Add New Tab</button>
      <div className="App">
        {/* <CustomDatePicker /> */}
        <button type="button" onClick={handleOpen}>
          ClickMe Open Drawer
        </button>
      </div>
      <DrawerComponent content={<div>sdf</div>} />
      <ModalComponent
        content={tabContent(methods, tabName, setTabName, hideModal)}
      />
    </div>
  );
};

export default NewTabProject;
