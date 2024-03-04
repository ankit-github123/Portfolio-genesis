import CustomDatePicker from "@components/shared/DatePicker";
import Input from "@components/shared/Input";
import TextAreaWithCharacterLimit from "@components/shared/Textarea";
import * as yup from "yup";

export const Projectsform = [
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
    name: "startdate",
    placeholder: "Select Start Date",
    tag: "Start Date",
    required: false,
    defaultValue: "",
    Accepter: CustomDatePicker,
    propertystyle: "col-span-12",
  },
  {
    name: "enddate",
    placeholder: "Select End Date",
    tag: "End Date",
    required: false,
    defaultValue: "",
    Accepter: Input,
    propertystyle: "col-span-12",
  },
  {
    name: "skills",
    placeholder: "Skills",
    tag: "Enter you Skills here",
    required: false,
    defaultValue: "",
    Accepter: Input,
    propertystyle: "col-span-12",
  },
  {
    name: "description",
    placeholder: "Type between 300 and 350 characters",
    tag: "Email",
    required: false,
    defaultValue: "",
    Accepter: TextAreaWithCharacterLimit,
    propertystyle: "col-span-12",
    minchars: 300,
    maxchars: 350,
  },
  {
    name: "projectlink",
    placeholder: "Project Link",
    tag: "",
    required: false,
    defaultValue: "",
    Accepter: Input,
    propertystyle: "col-span-12",
  },
];

export const projectSchema = yup.object().shape({
  title: yup.string().required("First name is required"),
  startdate: yup.string().required("Last name is required"),
  enddate: yup.string().required("Icon is required"),
  skills: yup.string().required("First name is required"),
  description: yup.string().required("Last name is required"),
  projectlink: yup.string().required("Icon is required"),
});

export const tabnameForm = [
  {
    name: "tabname",
    placeholder: "Tab name",
    tag: "Enter you Tab name here",
    required: false,
    defaultValue: "",
    Accepter: Input,
    propertystyle: "col-span-12",
  },
];

export const tabnameSchema = yup.object().shape({
  tabname: yup.string().required("Enter tab name here"),
});
