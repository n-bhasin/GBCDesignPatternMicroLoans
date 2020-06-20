import React, { useEffect } from "react";
import "./App.css";
// import * as action from "./blockchain/action";
import { Col, Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ButtonBorrow from "./components/buttonBorrow";

import Web3 from "web3";

const App = () => {
  const web3 = new Web3("http://localhost:8545");

  web3.eth.defaultAccount = web3.eth.accounts[0];

  useEffect(() => {
    const init = async () => {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
    };

    init();
  });

  return (
    <div className="app" style={{ margin: "0px", backgroundColor: "#000000" }}>
      <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <Navbar style={{ textAlign: "center" }} />

        <main style={{ height: "630px" }}>
          <Col style={{ textAlign: "center", marginTop: "50px" }}>
            <ButtonBorrow />
          </Col>
        </main>
        <Footer style={{ textAlign: "center" }} />
      </Container>
    </div>
  );
};

export default App;
