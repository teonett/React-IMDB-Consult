import Tilt from "react-parallax-tilt";
import { CardType } from "../types/CardType";
import * as C from "./styles";

const DisplayCard = ({ title, date, imgUrl, idDetail }: CardType) => {
  const handleClick = () => {
    sessionStorage.setItem("idMovie", idDetail);
    sessionStorage.getItem("name");
  };

  return (
    <Tilt>
      <C.Wrapper>
        <C.Image background={imgUrl} />
        <C.TextWrapper>
          <C.TextDate>{date}</C.TextDate>
          <C.TextTitle>{title}</C.TextTitle>
        </C.TextWrapper>
        <C.StatWrapper>
          <C.Stats>
            <C.LinkText href={"/details"} onClick={handleClick}>
              Detalhes
            </C.LinkText>
          </C.Stats>
        </C.StatWrapper>
      </C.Wrapper>
    </Tilt>
  );
};

export default DisplayCard;
