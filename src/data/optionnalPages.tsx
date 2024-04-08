import ImageViewer from "../components/pages/ImageViewer";
import SimpleManwha from "../components/pages/SimpleManwha";

const optionnalDataPages = [
  {
    name: "SimpleManwha",
    root: "/simpleManwha",
    id: 10,
    element: <SimpleManwha />,
  },
  {
    name: "ImageViewer",
    root: "/viewchapter",
    id: 10,
    element: <ImageViewer />,
  },
];

export default optionnalDataPages;
