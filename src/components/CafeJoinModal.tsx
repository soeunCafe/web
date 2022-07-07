import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { Cafe } from "../types/defaultType";
type prop = {
  onClose: () => {} | any;
  show: boolean;
  cafe: Cafe;
};
const CafeJoinModal = ({ onClose, show, cafe }: prop) => {
  return (
    <Modal isOpen={show}>
      <ModalHeader toggle={onClose}>{cafe.name}</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col xs={3} className="text-gray-500">
              카페 설명
            </Col>
            <Col xs={9}>{cafe.content}</Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Row>
          <Col>
            <Button color="primary" block>
              submit
            </Button>
          </Col>
          <Col>
            <Button onClick={onClose} block>
              close
            </Button>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  );
};

export default CafeJoinModal;
