import React from "react";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-light"
      style={{
        margin: "0px",
        backgroundColor: "#000000",
        textAlign: "center",
      }}
    >
      <h1
        className="navbar-brand"
        style={{ fontSize: "20px", color: "#2EB3FF", marginLeft: "560px" }}
      >
        Made By: Easy Loans Inc. with{" "}
        <i style={{ color: "red", fontSize: "22px" }}>&#9829;</i>
      </h1>
    </nav>
  );
};

export default Footer;
