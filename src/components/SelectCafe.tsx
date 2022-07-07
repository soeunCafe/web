import { useState } from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import { Cafe, ValueStringType } from "../types/defaultType";
import CafeList from "./CafeList";
const joinCafe: Cafe[] = [
  { id: 0, content: "hi", img: "/img/a.png", name: "강아지 카페" },
  { id: 1, content: "dd", img: "/img/a.png", name: "야옹이 카페" },
  { id: 2, content: "qq", img: "/img/a.png", name: "햄스터 카페" },
];
const notJoinCafe: Cafe[] = [
  { id: 3, content: "귀뚜라미 카페에 가입해보세요", img: "/img/a.png", name: "귀뚜라미 카페" },
  { id: 4, content: "곱등이 카페에 가입해보세요", img: "/img/a.png", name: "곱등이 카페" },
  { id: 5, content: "곤충 카페에 가입해보세요", img: "/img/a.png", name: "곤충 카페" },
];
const SelectCafe = () => {
  const [key, setKey] = useState<ValueStringType>("");
  return (
    <Container className="pt-48">
      <Row className="mb-16">
        <Col md={8}>
          <Input value={key} onChange={(e) => setKey(e.target.value)}></Input>
        </Col>
        <Col>
          <Button block>Select</Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <h2>가입 리스트</h2>
        </Col>
      </Row>
      <Row className="mb-16">
        <Col>
          <CafeList list={joinCafe} isJoin={true}></CafeList>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <h2>미가입 리스트</h2>{" "}
        </Col>
      </Row>
      <Row className="mb-16">
        <Col>
          <CafeList list={notJoinCafe} isJoin={false}></CafeList>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectCafe;
