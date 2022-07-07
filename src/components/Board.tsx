import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";

const Board = () => {
  const { boardid } = useParams<"boardid">();
  const categoryList = [
    { id: 0, cafeId: 0, title: "공지사항", userId: 0, userName: "일반인", userImg: "./ims.png", content: "ddd" },
    { id: 1, cafeId: 0, title: "게시판", userId: 0, userName: "일반인", userImg: "./ims.png", content: "ddd" },
    { id: 2, cafeId: 0, title: "게시판2", userId: 0, userName: "일반인", userImg: "./ims.png", content: "ddd" },
  ];
  const clickBoard = categoryList.find((cate) => cate.id === Number(boardid));
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>{clickBoard?.title}</CardHeader>
          <CardBody>{clickBoard?.content}</CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Board;
