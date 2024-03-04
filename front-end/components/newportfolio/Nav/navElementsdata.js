import { TbChecklist } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { PiGearSixDuotone } from "react-icons/pi";
import { PiFilesLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
export const NavelementsData = [
  {
    id: 1,
    name: "My Profile",
    link: "/newportfolio/myprofile",
    icon: FaRegUser,
    status: "COMPLETED",
  },
  {
    id: 2,
    name: "Skills List",
    link: "/newportfolio/myservices",
    icon: TbChecklist,
    status: "COMPLETED",
  },
  {
    id: 3,
    name: "Services ",
    link: "/newportfolio/projects",
    icon: PiGearSixDuotone,
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Projects Details",
    link: "/newportfolio/myprofile",
    icon: PiFilesLight,
    status: "INACTIVE",
  },
  {
    id: 5,
    name: "Social Links",
    link: "/newportfolio/myprofile",
    icon: IoShareSocialOutline,
    status: "INACTIVE",
  },
];
