import Field from "@components/shared/Field";
import { useModal } from "@utils/customhook/modal";
import { servicesForm } from "@utils/forms/services";
import React from "react";
import ModalContent from "./ModalContent";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const FormInputs = (props) => {
  const { showModal, hideModal, ModalComponent } = useModal();
  const allIcons = { ...IoIcons, ...FaIcons, ...AiIcons };
  const handleAddIcon = (iconName) => {
    console.log("handleAddIcon", iconName);
    props.setValue("serviceicon", iconName);
    hideModal();
  };

  const serviceIconData = props.getValues()?.serviceicon;

  const IconCompent = serviceIconData && allIcons[serviceIconData];
  return (
    <div className="grid sm:grid-cols-6 gap-x-14">
      <div className="sm:col-span-3">
        <div className="grid grid-cols-12 gap-4">
          {servicesForm.map((profile) => {
            return (
              <div key={profile.name} className={`${profile.propertystyle}`}>
                <Field
                  {...profile}
                  {...props}
                  errors={props.formState.errors}
                />
              </div>
            );
          })}
        </div>
        <div>
          <button
            className="w-full py-2.5 my-6 rounded-sm border-light bg-btn_light"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="border border-lightest w-full flex flex-col items-center">
          <div className="w-20 h-20 my-4 border border-dashed border-light">
            {IconCompent ? (
              <div className="flex justify-center items-center h-full">
                <IconCompent size="50" />
              </div>
            ) : (
              <img
                src="/images/newprofile/serviceicon.png"
                className="pt-2 opacity-80"
              />
            )}
          </div>
          <div className="text-light text-sm  w-[62%] m-auto">
            Add Card logo by selecting from icon list
          </div>
          <div className="flex items-center border-[0.5px] border-lighter w-[62%] m-auto mt-3 mb-4 text-sm">
            <button
              type="button"
              onClick={showModal}
              className="py-2 px-4 bg-btn_lighter"
            >
              Choose icon
            </button>
            <div className="mx-3">
              {props.getValues()?.serviceicon
                ? props.getValues()?.serviceicon
                : " No icon choosen"}
            </div>
          </div>
        </div>
      </div>
      <ModalComponent
        content={<ModalContent handleAddIcon={handleAddIcon} />}
      />
    </div>
  );
};

export default FormInputs;
