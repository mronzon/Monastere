import { MdOutlineUpdate } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import Library from "../components/pages/Library";
import Options from "../components/pages/Options";
import MajDisplay from "../components/pages/MajDisplay";
import Explorer from "../components/pages/Explorer";

const pageData = [
  {
    name: "Bibliotheque",
    root: "/",
    id: 1,
    icon: <TbBooks />,
    element: <Library />,
  },
  {
    name: "Mise à Jour",
    root: "/maj",
    id: 2,
    icon: <MdOutlineUpdate />,
    element: <MajDisplay />,
  },
  {
    name: "Explorer",
    root: "/explorer",
    id: 3,
    icon: <MdExplore />,
    element: <Explorer />,
  },
  {
    name: "Options",
    root: "/options",
    id: 4,
    icon: <IoMdOptions />,
    element: <Options />,
  },
];

export default pageData;
