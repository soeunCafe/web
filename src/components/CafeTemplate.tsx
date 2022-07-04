import { Outlet, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CafeSideBar from "./CafeSideBar";
import Header from "./Header";

const CafeTemplate = () => {
  const { id } = useParams<"id">();
  return (
    <div className="min-h-screen">
      <div className="min-h-[10vh]">
        <Header></Header>
      </div>
      <div className="pl-8 pr-8">
        <div className="min-h-full flex">
          <div className="border-r-2 border-gray p-4 w-1/6 min-h-[89vh]">
            <CafeSideBar cafeId={id}></CafeSideBar>
          </div>
          <div className="w-5/6">
            <Container fluid="xs" className="ml-8 mr-8 p-4">
              <Outlet></Outlet>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeTemplate;
