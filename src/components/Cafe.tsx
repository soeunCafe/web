import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Cafe = () => {
  const { id } = useParams<"id">();
  return (
    <Row>
      <Col>{id}번째 카페 첫 페이지입니다.</Col>
    </Row>
  );
};

export default Cafe;
