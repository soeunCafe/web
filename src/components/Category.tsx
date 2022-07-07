import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Category = () => {
  const { categoryid } = useParams<"categoryid">();
  const categoryList = [
    { id: 0, cafeId: 0, title: "공지사항", userId: 0, userName: "일반인", userImg: "./ims.png", content: "ddd" },
    { id: 1, cafeId: 0, title: "게시판", userId: 0, userName: "일반인", userImg: "./ims.png", content: "ddd" },
    { id: 2, cafeId: 0, title: "게시판2", userId: 0, userName: "일반인", userImg: "./ims.png", content: "ddd" },
  ];
  return (
    <>
      {categoryList.map((cate) => (
        <Row>
          <Col>
            <Link to={`/cafe/${cate.cafeId}/board/${cate.id}`}>{cate.title}</Link>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Category;
