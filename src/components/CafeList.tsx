import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row } from "reactstrap";
import { Cafe } from "../types/defaultType";
import CafeJoinModal from "./CafeJoinModal";
type props = { list: Cafe[]; isJoin: boolean };
const CafeList = ({ list, isJoin }: props) => {
  const [show, setShow] = useState<boolean>(false);
  const [clickCafe, setClickCafe] = useState<Cafe>({
    id: 0,
    content: "",
    img: "",
    name: "",
  });

  const onChangeShow = () => setShow(!show);
  const onClickNotJoinCafe = (cafe: Cafe) => {
    setClickCafe(cafe);
    onChangeShow();
  };

  return isJoin ? (
    <>
      {list.map((cafe) => (
        <Row key={cafe.id}>
          <Link className="no-underline text-black hover:bg-slate-100" to={`/cafe/${cafe.id}`}>
            <p>{cafe.name}</p>
          </Link>
        </Row>
      ))}
    </>
  ) : (
    <>
      {list.map((cafe) => (
        <Row key={cafe.id}>
          <Link to="#" className="no-underline text-black cursor-pointer hover:bg-slate-100" onClick={() => onClickNotJoinCafe(cafe)}>
            <p>{cafe.name}</p>
          </Link>
        </Row>
      ))}

      <CafeJoinModal cafe={clickCafe} onClose={onChangeShow} show={show} />
    </>
  );
};

export default CafeList;
