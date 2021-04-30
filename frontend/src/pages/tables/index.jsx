import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  Pagination,
  TablesContainer,
  Title,
  PageNum,
  ActionLinks,
} from "./tables.elements";
import { useGlobalContext } from "../../context/context";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdEdit,
  MdDeleteForever,
} from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import InfoModal from "../../components/infoModal";

const Tables = () => {
  const { rentalData, pageBackward, pageForward, page } = useGlobalContext();
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState("");

  const deleteItem = (id, product, serialNum) => {
    window.confirm(
      `You are about to delete ${product} with serial number: ${serialNum}`
    ) &&
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/data/rental-data/delete/${id}`
        )
        .then((response) => {
          console.log(response.data);
          window.location.reload(true);
        })
        .catch((err) => console.log("There was an error"));
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = (id) => {
    setShow(true);
    setItemId(id);
  };

  return (
    <TablesContainer>
      <InfoModal></InfoModal>
      <Title>ALL AVAILABLE DATA </Title>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>ME#</th>
            <th>Last Service</th>
            <th>SMU</th>
            <th>Next Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rentalData.length > 0 &&
            rentalData.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{item["Product"]}</td>
                  <td>{item["ME#"]}</td>
                  <td>{item["Last Service"]}</td>
                  <td>{item["SMU"]}</td>
                  <td>{item["Next Service"]}</td>
                  <td>{item["Status "]}</td>
                  <td>
                    <ActionLinks>
                      <Link to={`/data-edit/${item._id}`}>
                        <MdEdit />
                      </Link>
                      <Link
                        to="#"
                        onClick={(e) => {
                          deleteItem(
                            item._id,
                            item["Product"],
                            item["Serial Number"]
                          );
                        }}
                      >
                        <MdDeleteForever />
                      </Link>
                      <Link
                        to="#"
                        onClick={(e) => {
                          handleOpen(item._id);
                        }}
                      >
                        <BiCommentDetail />
                      </Link>
                    </ActionLinks>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <InfoModal id={itemId} handleClose={handleClose} show={show} />
      </Table>
      <Pagination>
        <Button
          variant="outline-info"
          onClick={() => {
            pageBackward();
          }}
        >
          <MdNavigateBefore />
        </Button>
        <PageNum>{page + 1}</PageNum>
        <Button
          variant="outline-info"
          onClick={() => {
            pageForward();
          }}
        >
          <MdNavigateNext />
        </Button>
      </Pagination>
    </TablesContainer>
  );
};

export default Tables;
