import React from "react";
import { Button, Container, ModalBody } from "react-bootstrap";
import { connect } from "react-redux";
import {
  BackGround,
  Body,
  ButtonContainer,
  CenterDiv,
  HomeContainer,
  Title,
} from "./home.elements";
import { Link } from "react-router-dom";

const Home = ({ isAuthenticated, user }) => {
  return (
    <BackGround>
      <HomeContainer>
        <CenterDiv>
          <Title>Welcome to the control center</Title>
          <Body>
            {isAuthenticated
              ? `You are currently signed in as ${user.name}`
              : `You are currently not signed in`}
          </Body>
          {!isAuthenticated && (
            <ButtonContainer>
              <Link to="/login">
                <Button variant="info">Login</Button>
              </Link>
            </ButtonContainer>
          )}
        </CenterDiv>
      </HomeContainer>
    </BackGround>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(mapDispatchToProps)(Home);
