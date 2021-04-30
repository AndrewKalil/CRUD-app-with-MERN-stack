import styled from "styled-components";
import { Container } from "react-bootstrap";

export const TablesContainer = styled(Container)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 5.5vh;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const PageNum = styled.div`
  width: 45px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid darkcyan;
  font-weight: 500px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const ActionLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
