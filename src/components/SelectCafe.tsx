import { useState } from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import { Cafe, ValueStringType } from "../types/defaultType";
import CafeList from "./CafeList";
const joinCafe: Cafe[] = [
  { id: 0, content: "hi", img: "/img/a.png", name: "hi" },
  { id: 1, content: "wq", img: "/img/a.png", name: "wq" },
  { id: 2, content: "ge", img: "/img/a.png", name: "ge" },
];
const notJoinCafe: Cafe[] = [
  { id: 3, content: "qq", img: "/img/a.png", name: "qq" },
  { id: 4, content: "dsa", img: "/img/a.png", name: "dsa" },
  { id: 5, content: "vcxz", img: "/img/a.png", name: "vcxz" },
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
