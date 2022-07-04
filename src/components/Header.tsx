import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

const Header = () => {
  return (
    <Container fluid className="p-8  border-b-2 border-r-emerald-300 text-2xl">
      <Row>
        <Col>
          <Link to={"/"} className={"no-underline"}>
            Home
          </Link>
        </Col>
        <Col></Col>
        <Col>
          <Row>
            <Col>
              <Button block color="primary">
                logout
              </Button>
            </Col>
            <Col>
              <Button outline block color="primary">
                logout
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
