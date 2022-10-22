import { Route, Routes } from "react-router-dom";
import { ItemMove } from "../catch-move";
import ExampleScroll from "../scroll";

export const Example = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemMove />}></Route>
      <Route path="/scroll" element={<ExampleScroll />} />
    </Routes>
  );
};
