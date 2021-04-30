import { Container, Form } from "react-bootstrap";
import styled from "styled-components";

export const ContentContainer = styled(Container)``;

export const FormContainer = styled(Container)`
  /* background: lightgray; */
  margin-top: 30px;
  border: 0.5px solid gray;
  border-radius: 15px;
  padding-top: 45px;
  padding-bottom: 45px;

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
  text-align: center;
  font-size: 5.5vh;
`;

export const DataEditForm = styled(Form)`
  display: grid;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormRow = styled(Form.Row)`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
