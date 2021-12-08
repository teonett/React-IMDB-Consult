import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 12px 18px;
  background-color: #27282f;
  color: #fff;
  min-width: 990px;
  font-family: arial;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.1rem;
  text-align: justify;
`;

export const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;

export const Action = styled.button`
  margin: 5px 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  width: 330px;
  :hover {
    opacity: 0.8;
  }
`;

export const StyledPhoto = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: center;
`;
