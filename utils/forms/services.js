import Input from "@components/shared/Input";
import * as yup from "yup";

export const servicesForm = [
  {
    name: "title",
    placeholder: "Title",
    tag: "Enter you title here",
    required: false,
    defaultValue: "",
    Accepter: Input,
    propertystyle: "col-span-12",
  },
  {
    name: "caption",
    placeholder: "Caption",
    tag: "Caption",
    required: false,
    defaultValue: "",
    Accepter: Input,
    propertystyle: "col-span-12",
  },
];

export const servicesSchema = yup.object().shape({
  title: yup.string().required("First name is required"),
  caption: yup.string().required("Last name is required"),
  serviceicon: yup.string().required("Icon is required"),
});
