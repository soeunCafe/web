import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../components/Board";
import Cafe from "../components/Cafe";
import CafeTemplate from "../components/CafeTemplate";
import Category from "../components/Category";
import Login from "../components/Login";
import SelectCafe from "../components/SelectCafe";

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<SelectCafe />}></Route>
        <Route path="/cafe/:id" element={<CafeTemplate></CafeTemplate>}>
          <Route path="/cafe/:id" element={<Cafe></Cafe>}></Route>
          <Route path="/cafe/:id/category/:categoryid" element={<Category></Category>}></Route>
          <Route path="/cafe/:id/board/:boardid" element={<Board></Board>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
