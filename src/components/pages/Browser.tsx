import { Routes, Route } from "react-router-dom";
import optionnalDataPages from "../../data/optionnalPages";
import Library from "./Library";
import Options from "./Options";
import Explorer from "./Explorer";
import MajDisplay from "./MajDisplay";

interface Props {
  searchText: string;
}

const Browser = ({ searchText }: Props) => {
  return (
    <Routes>
      <Route id="1" element={<Library />} path="/" />
      <Route id="2" element={<MajDisplay />} path="/maj" />
      <Route
        id="3"
        element={<Explorer searchText={searchText} />}
        path="/explorer"
      />
      <Route id="4" element={<Options />} path="/options" />
      {optionnalDataPages.map((item) => (
        <Route key={item.id} path={item.root} element={item.element} />
      ))}
    </Routes>
  );
};

export default Browser;
