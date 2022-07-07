import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";

const Board = () => {
  const { boardid } = useParams<"boardid">();
  const categoryList = [
    { id: 0, cafeId: 0, title: "[공지사항] 바르고 고운말 써주세요", userId: 0, userName: "일반인", userImg: "./ims.png", content: "즐거운 카페 이용을 위해 타인에게 바르고 고운말을 써주세요" },
    { id: 1, cafeId: 0, title: "우리집 애완동물", userId: 0, userName: "일반인", userImg: "./ims.png", content: "저희집 뽀돌이랑 마루 너무 이쁘죠?" },
    { id: 2, cafeId: 0, title: "사료 팔아요", userId: 0, userName: "일반인", userImg: "./ims.png", content: "강아지 치즈버거 팔아요 가격 제시해주세요" },
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
