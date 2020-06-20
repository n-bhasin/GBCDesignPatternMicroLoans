import React from "react";

const Navbar = () => {
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
        style={{ fontSize: "40px", color: "#2EB3FF", marginLeft: "600px" }}
      >
        Easy Loans
      </h1>
    </nav>
  );
};

export default Navbar;
