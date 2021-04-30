import React from "react";
import Navbar from "../components/navbar";
import { connect } from "react-redux";

const Layout = (props) => {
  return (
    <div className="containerMain">
      <Navbar />
      {props.children}
    </div>
  );
};

export default connect(null)(Layout);
