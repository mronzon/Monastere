import { Routes, Route } from "react-router-dom";
import pageData from "../../data/pages";

const Browser = () => {
  return (
    <Routes>
      {pageData.map((item) => (
        <Route key={item.id} path={item.root} element={item.element} />
      ))}
    </Routes>
  );
};

export default Browser;
