import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Category = () => {
  const { categoryid } = useParams<"categoryid">();
  return (
    <Row>
      <Col>{categoryid}</Col>
    </Row>
  );
};

export default Category;
