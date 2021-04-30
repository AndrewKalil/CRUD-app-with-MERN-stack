import { Container } from "react-bootstrap";
import styled from "styled-components";

export const BackGround = styled.div`
  width: 100%;
  background: black;
  color: white;
`;
export const HomeContainer = styled(Container)`
  display: grid;
  place-content: center;
  height: 100vh;
`;

export const CenterDiv = styled.div`
  display: grid;
  place-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export const Body = styled.h4`
  text-align: center;
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
