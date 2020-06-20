import React, { useState, useEffect } from "react";
import { Button, Table, Badge } from "react-bootstrap";
import {
  requestDebt,
  debtInfo,
  getAllDebtIds,
  convertToEther,
} from "../blockchain/action";
import { Modal } from "react-bootstrap";
// import Approvals from "./approvals";

const Borrow = () => {
  const [show, setShow] = useState(false);
  const [lendShow, setlendShow] = useState(false);
  const [address, setAddress] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [ids, setIds] = useState(undefined);
  const [borrower, setBorrower] = useState(undefined);
  const [lender, setlender] = useState(undefined);
  const [debtAmount, setdebtAmount] = useState(undefined);
  useEffect(() => {
    const getIds = async () => {
      const reciept = getAllDebtIds().then((res) => {
        console.log(res.length);
        const count = res.length;
        for (let i = count - 1; i > 0; i--) {
          debtInfo(res[i]).then((result) => {
            console.log(result);

            setIds(result[0]);
            setBorrower(result[1]);
            setlender(result[2]);

            setdebtAmount(convertToEther(result[3]));
          });
          break;
        }
      });
      console.log(reciept);

      console.log("debt information", borrower);
    };
    getIds();
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlelendShow = () => setlendShow(true);
  const handlelendClose = () => setlendShow(false);

  const handlelendSubmit = async (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("address:", address);
    console.log("amount:", amount);
    const receipt = await requestDebt(address, amount);
    console.log(receipt);
    handleClose();
  };
  return (
    <div>
      <Button
        variant="primary"
        style={{
          padding: "40px",
          marginRight: "8px",
          fontSize: "25px",

          letterSpacing: "2px",
        }}
        size="lg"
        onClick={handleShow}
      >
        <i
          className="fa fa-money"
          style={{ fontSize: "40px" }}
          aria-hidden="true"
        ></i>
        <br />
        BORROW
      </Button>
      <Button
        variant="primary"
        style={{
          padding: "40px",
          paddingLeft: "55px",
          paddingRight: "55px",
          marginRight: "5px",
          fontSize: "25px",

          letterSpacing: "2px",
        }}
        onClick={handlelendShow}
        size="lg"
      >
        <i
          className="fa fa-money"
          style={{ fontSize: "40px" }}
          aria-hidden="true"
        ></i>
        <br />
        LEND
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request for Loan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your loan amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={lendShow} onHide={handlelendClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fund the Borrower</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your loan amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlelendClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlelendSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Table
        responsive
        className="col-md-12"
        style={{ marginTop: "80px" }}
        striped
        bordered
        variant="light"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Borrower</th>
            <th>Lender</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ids}</td>
            <td>{borrower}</td>
            <td>{lender}</td>
            <td>{debtAmount}eth</td>
            {/* <td>{debtInformation[2]}</td> */}
            {/* <td>{debtInformation[3]}</td>{" "} */}
            <td>
              <Badge variant="warning">Pending</Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Borrow;
