import styled from "styled-components";

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-width: 980px;
  font-family: arial;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
