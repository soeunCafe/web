import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
type prop = { cafeId: String | undefined };
const CafeSideBar = ({ cafeId }: prop) => {
  const sideMenu: { id: number; name: String }[] = [
    {
      id: 1,
      name: "공지",
    },
    {
      id: 2,
      name: "게시",
    },
  ];
  return (
    <>
      <Row className="mb-4">
        <Col>
          <Link to={`/cafe/${cafeId}`} className="no-underline text-black ">
            <h3 className="hover:text-blue-300">title</h3>
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
