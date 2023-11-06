"use client";

import React, { useContext } from "react";
import { profileForm } from "@utils/forms/profile";
import Field from "@components/shared/Field";

const ProfileInputs = (props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        {profileForm.map((profile) => {
          return (
            <div key={profile.name} className={`${profile.propertystyle}`}>
              <Field {...profile} {...props} errors={props.formState.errors} />
            </div>
          );
        })}
      </div>
      {/* <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-7'>sd</div>
                <div className='col-span-6'>sd</div>
                <div className='col-span-12'>sd</div>
            </div> */}
      <button type="submit">submit</button>
    </>
  );
};

export default ProfileInputs;
