import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Grid, Row } from "./info-modal.elements";

const InfoModal = ({ show, handleClose, id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/data/rental-data/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setData(err));
  }, [id]);

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ textAlign: "center" }}
        >{`Information about ${data["Serial Number"]}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Grid>
          <Row>
            <h6>Product Name:</h6>
            <p>{data.Product || ""}</p>
          </Row>
          <Row>
            <h6>ME Number:</h6>
            <p>{data["ME#"] || ""}</p>
          </Row>
          <Row>
            <h6>Product Model:</h6>
            <p>{data.Model || ""}</p>
          </Row>
          <Row>
            <h6>Product Serial Number:</h6>
            <p>{data["Serial Number"] || ""}</p>
          </Row>
          <Row>
            <h6>Last Service:</h6>
            <p>{data["Last Service"] || 0}</p>
          </Row>
          <Row>
            <h6>SMU:</h6>
            <p>{data.SMU || 0}</p>
          </Row>
          <Row>
            <h6>Next Service:</h6>
            <p>{data["Next Service"] || 0}</p>
          </Row>
          <Row>
            <h6>MIS:</h6>
            <p>{data.MIS || ""}</p>
          </Row>
          <Row>
            <h6>Product Location:</h6>
            <p>{data.Location || ""}</p>
          </Row>
          <Row>
            <h6>Product Conectivity:</h6>
            <p>{data.Conectivity || ""}</p>
          </Row>
          <Row>
            <h6>Product Status:</h6>
            <p>{data["Status"] || ""}</p>
          </Row>
          <Row>
            <h6>Comments:</h6>
            <p>{data["COMMENTS"] || ""}</p>
          </Row>
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
