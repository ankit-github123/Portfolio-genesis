import Field from "@components/shared/Field";
import { useDrawer } from "@utils/customhook/modal";
import { Projectsform } from "@utils/forms/projects";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
const SectionTabs = (props) => {
  const { tabs, tabId } = props;
  const { handleDrawerOpen, handleDrawerClose, DrawerComponent } = useDrawer();
  const methods = useForm();
  const AddNewCard = () => {
    return (
      <div
        onClick={handleDrawerOpen}
        className="border-2 border-dashed border-lighter p-4 cursor-pointer opacity-80 hover:opacity-100"
      >
        <div className="flex flex-col items-center gap-2 text-light font-medium">
          <AiOutlinePlus size={50} />
          <div>Add new card</div>
        </div>
        <div className="text-xs text-lighter text-justify mt-4">
          Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          tincidunt dui ut ornare lectus sit. Viverra ipsum nunc aliquet
          bibendum enim facilisis. Vel turpis nunc eget lorem dolor. Nisl purus
          in mollis nunc sed id semper.
        </div>
      </div>
    );
  };

  const renderDrawerContent = (
    <div className="px-5">
      <form className=" flex flex-col gap-3">
        {Projectsform.map((profile) => {
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
      </form>
    </div>
  );
  return (
    <>
      <div className="grid grid-cols-3">{tabId !== "all" && AddNewCard()}</div>
      <DrawerComponent content={renderDrawerContent} />
    </>
  );
};

export default SectionTabs;
