import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
type prop = { cafeId: String | undefined };
const CafeSideBar = ({ cafeId }: prop) => {
  const sideMenu: { id: number; name: String }[] = [
    {
      id: 1,
      name: "공지사항",
    },
    {
      id: 2,
      name: "입양후기",
    },
  ];
  return (
    <>
      <Row className="mb-4">
        <Col>
          <Link to={`/cafe/${cafeId}`} className="no-underline text-black ">
            <h3 className="hover:text-blue-300">카테고리</h3>
          </Link>
        </Col>
      </Row>
      {sideMenu.map((menu) => (
        <Row className="mb-4" key={menu.id}>
          <Col>
            <Link to={`/cafe/${cafeId}/category/${menu.id}`} className="no-underline text-black">
              {menu.name}
            </Link>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CafeSideBar;
