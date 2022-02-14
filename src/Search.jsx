import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
const Search = () => {
  const nav = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        className="search__dateRange"
      />
      <h1>
        Number of guests <PeopleIcon />
      </h1>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => nav("/search")}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
