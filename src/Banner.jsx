import React, { useState } from "react";
import "./style/banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const nav = useNavigate()

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_search_button"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Not sure where to go? Perfect.</h1>
        <h2>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h2>
        <Button variant="outlined" onClick={() => nav("/search")} >Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
