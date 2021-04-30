import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  grid-auto-rows: minmax(300px, auto);

  @media screen and (max-width: 480px) {
    grid-template-columns: 95%;
    grid-auto-rows: minmax(250px, auto);
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
  text-align: center;
  font-size: 5.5vh;
`;

export const GridItem = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: auto;
  /* background: darkolivegreen; */
  border: 1px solid darkslategray;
  border-radius: 14px;
`;
