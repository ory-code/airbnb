import React from "react";
import "./style/header.css";
import logo from "./images/logo-airbnb.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate()
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__icon" onClick={() => nav("/")} />
      <div className="header__center">
        <input type="text" placeholder="Search..." />
        <SearchIcon style={{ cursor: "pointer" }} onClick={() => nav("/search")} />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon style={{ cursor: "pointer" }} />
        <ExpandMoreIcon style={{ cursor: "pointer" }} />
        <Avatar style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
