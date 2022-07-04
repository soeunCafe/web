import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Cafe = () => {
  const { id } = useParams<"id">();
  return (
    <Row>
      <Col>{id}</Col>
    </Row>
  );
};

export default Cafe;
