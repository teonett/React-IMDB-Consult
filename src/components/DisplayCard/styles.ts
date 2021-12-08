import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 300px 300px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const Image = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const TextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 18px;
`;

export const TextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 15px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const TextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
  margin-top: 10px;
`;
