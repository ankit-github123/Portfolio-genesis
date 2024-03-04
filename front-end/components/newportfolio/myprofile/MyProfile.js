"use client";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillCameraFill } from "react-icons/bs";
import React, { useContext, useEffect, useRef, useState } from "react";
import ProfileInputs from "./ProfileInputs";
import { myprofileSchema } from "@utils/forms/profile";
import { AppContext } from "@context/AppContext";

const Profile = () => {
  const session = useSession();
  const { setPortfolio, portfolio } = useContext(AppContext);

  const imageRef = useRef();
  const [file, setFile] = useState();
  const [data1, setData] = useState(null);

  console.log("data1", data1);
  const methods = useForm({
    resolver: yupResolver(myprofileSchema),
    mode: "onBlur",
    defaultValues: data1
      ? data1
      : {
          firstname: "sdf1",
          lastname: "sdf1",
          username: "sdf1",
          email: "ankit1909001@gmail.com",
          description: "sdf",
        },
  });
  console.log(methods.formState.errors, "formdata2");
  const onhandlesubmit = async (data) => {
    console.log(data, "formdata1");
    const formdata = new FormData();
    formdata.set("firstname", data.firstname);
    formdata.set("lastname", data.lastname);
    formdata.set("username", data.username);
    formdata.set("email", data.email);
    formdata.set("description", data.description);
    formdata.set("profileimage", data.profileimage);
    formdata.set("userId", session?.data?.user?.id);
    const response = await fetch("/api/create-profile", {
      method: "POST",
      body: formdata,
    });
    setPortfolio({ ...data });
  };

  useEffect(() => {
    const fetchDataWithDelay = () => {
      setTimeout(() => {
        // Simulate the API response delay of 10 seconds
        const dummyData = {
          firstname: "sdf",
          lastname: "sdf",
          username: "sdf",
          email: "ankit190900@gmail.com",
          description: "sdf",
        };
        methods.reset(dummyData);
      }, 1000); // 10 seconds in milliseconds
    };

    fetchDataWithDelay();
  }, []);
  const handleProfileImageChange = (e) => {
    setFile(e.target.files[0]);
    methods.setValue("profileimage", e.target.files[0]);
  };
  return (
    <form onSubmit={methods.handleSubmit(onhandlesubmit)} className="">
      <div className="grid sm:grid-cols-5 gap-5">
        <div className="col-span-3 order-last sm:order-first h-full">
          <ProfileInputs {...methods} />
        </div>
        <div className="sm:col-span-2 order-first sm:order-last">
          <div className="relative w-64 h-64 border-[1.5px] border-secondary border-dashed rounded-full m-auto">
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                className="w-full h-full rounded-full opacity-80"
                alt="Protfolio genesis"
              />
            ) : (
              <img
                src="/images/newprofile/nouser.jpeg"
                className="w-full h-full rounded-full opacity-20"
                alt="Protfolio genesis"
              />
            )}
            <div
              onClick={() => imageRef.current.click()}
              className="
                    absolute -bottom-[1px] w-full h-2/5 bg-secondary opacity-40 rounded-b-full flex flex-col items-center cursor-pointer hover:opacity-70 transition-transform duration-1000 transform hover:scale-105
                    "
            >
              <input
                ref={imageRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageChange}
              />
              <BsFillCameraFill size={30} className="mt-3" />
              <div className="w-[60%] mx-auto my-2 text-sm">
                Select profile picture
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
