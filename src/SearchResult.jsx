import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "./style/searchResult.css";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormControlLabel from "@mui/material/FormControlLabel";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <div className="searchResult__Description">
        <h2>{title}</h2>
        <p>{location}</p>
        <p>{description}</p>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" style={{color: 'red'}} />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="searchResult__price">
        <h2>{price}</h2>
        <p>{total}</p>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon color="error" />}
              name="checkedH"
            />
          }
          label="Save your favorite"
         
        />
      </div>
    </div>
  );
};

export default SearchResult;
