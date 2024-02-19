import { MdOutlineUpdate } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";

const pageData = [
  {
    name: "Bibliotheque",
    root: "biblio",
    id: 1,
    icon: <TbBooks />,
  },
  {
    name: "Mise à Jour",
    root: "maj",
    id: 2,
    icon: <MdOutlineUpdate />,
  },
  {
    name: "Explorer",
    root: "explorer",
    id: 3,
    icon: <MdExplore />,
  },
  {
    name: "Options",
    root: "options",
    id: 4,
    icon: <IoMdOptions />,
  },
];

export default pageData;
