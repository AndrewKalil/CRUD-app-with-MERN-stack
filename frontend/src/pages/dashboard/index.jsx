import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Grid, GridItem, Title } from "./dashboard.elements";

const Dashboard = ({ isAuthenticated }) => {
  return (
    <Container>
      <Title>DASHBOARD</Title>
      <Grid>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapDispatchToProps)(Dashboard);
