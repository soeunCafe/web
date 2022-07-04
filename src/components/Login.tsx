import { useState } from "react";
import { Col, Input, Row } from "reactstrap";
import { ValueStringType } from "../types/defaultType";

const Login = () => {
  const [userId, setUserId] = useState<ValueStringType>("");
  const [password, setPassword] = useState<ValueStringType>("");
  return (
    <Row>
      <Col>
        <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)}></Input>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
      </Col>
    </Row>
  );
};

export default Login;
