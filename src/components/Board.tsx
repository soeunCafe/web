import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Board = () => {
  const { boardid } = useParams<"boardid">();
  return (
    <Row>
      <Col>{boardid}</Col>
    </Row>
  );
};

export default Board;
