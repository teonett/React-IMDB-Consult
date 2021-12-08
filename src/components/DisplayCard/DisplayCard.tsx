import Tilt from "react-parallax-tilt";
import { CardType } from "../types/CardType";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";

const DisplayCard = ({ title, date, imgUrl, idDetail }: CardType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.setItem("idMovie", idDetail);
    sessionStorage.getItem("name");
    navigate(`/details`);
  };

  return (
    <Tilt>
      <C.Wrapper>
        <C.Image background={imgUrl} onClick={handleClick} />
        <C.TextWrapper>
          <C.TextDate onClick={handleClick}>{date}</C.TextDate>
          <C.TextTitle onClick={handleClick}>{title}</C.TextTitle>
        </C.TextWrapper>
      </C.Wrapper>
    </Tilt>
  );
};

export default DisplayCard;
