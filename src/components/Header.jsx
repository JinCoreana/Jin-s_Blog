import React from "react";
import { Link } from "react-router-dom";
import useBrowserSize from "../hooks/useBrowserSize";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = ({ title }) => {
  const { width } = useBrowserSize();
  return (
    <div className="Header">
      <h1>Jin's</h1>
      <Link to="/">
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "90px", margin: "0px", pointer: "cursor" }}
        />
      </Link>
      <h1>Blog</h1>
      <div className="device">
        {width < 428 ? (
          <FaMobileAlt />
        ) : width < 1024 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>
    </div>
  );
};

export default Header;
