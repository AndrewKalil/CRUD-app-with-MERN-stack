import React, { useEffect, useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import {
  ButtonContainer,
  FormContainer,
  DataEditForm,
  FormRow,
  ContentContainer,
  Title,
} from "./data-edit.elements";
import axios from "axios";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const DataEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/data/rental-data/${id}`)
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    let value = e.target.value;
    let key = e.target.name;

    setData({ ...data, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/data/rental-data/update/${id}`,
        data
      )
      .then((data) => {
        alert(data.data);
        window.location.reload(true);
      })
      .catch((error) => {
        alert("There was an error");
      });
  };

  return (
    <ContentContainer>
      <Title>UPDATE PRODUCT</Title>
      <Link to="/tables">
        <Button variant="info">
          <IoReturnUpBackSharp /> Tables
        </Button>
      </Link>
      <FormContainer>
        <DataEditForm
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormRow>
            <Form.Group as={Col}>
              <Form.Label>Product</Form.Label>
              <Form.Control
                name="Product"
                type="text"
                placeholder="Enter product name"
                value={data["Product"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>ME#</Form.Label>
              <Form.Control
                name="ME#"
                type="text"
                placeholder="Enter ME#"
                value={data["ME#"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </FormRow>

          <FormRow>
            <Form.Group as={Col}>
              <Form.Label>Model</Form.Label>
              <Form.Control
                name="Model"
                type="text"
                placeholder="Enter product model"
                value={data["Model"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Serial Number</Form.Label>
              <Form.Control
                name="Serial Number"
                type="text"
                placeholder="Enter serial number"
                value={data["Serial Number"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </FormRow>

          <FormRow>
            <Form.Group as={Col}>
              <Form.Label>Last Service</Form.Label>
              <Form.Control
                name="Last Service"
                type="text"
                placeholder="Enter last service"
                value={data["Last Service"] || 0}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>SMU</Form.Label>
              <Form.Control
                name="SMU"
                type="text"
                placeholder="Enter SMU"
                value={data["SMU"] || 0}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </FormRow>

          <FormRow>
            <Form.Group as={Col}>
              <Form.Label>Next Service</Form.Label>
              <Form.Control
                name="Next Service"
                type="text"
                placeholder="Enter next service"
                value={data["Next Service"] || 0}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>MIS</Form.Label>
              <Form.Control
                name="MIS"
                type="text"
                placeholder="Enter MIS"
                value={data["MIS"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </FormRow>

          <FormRow>
            <Form.Group as={Col}>
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="Location"
                type="text"
                placeholder="Enter location"
                value={data["Location"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Conectivity</Form.Label>
              <Form.Control
                name="Conectivity"
                type="text"
                placeholder="Enter conectivty"
                value={data["Conectivity"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </FormRow>

          <FormRow>
            <Form.Group as={Col}>
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="Status"
                type="text"
                placeholder="Enter Status of product"
                value={data["Status"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="COMMENTS"
                type="text"
                placeholder="Enter Status of product"
                value={data["COMMENTS"] || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </FormRow>

          <ButtonContainer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </ButtonContainer>
        </DataEditForm>
      </FormContainer>
    </ContentContainer>
  );
};

export default DataEdit;
