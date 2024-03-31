import React, { useState } from "react";
import "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./styles.css";
import { Input, InputAdornment } from "@mui/material";
import { Close, SearchOutlined } from "@mui/icons-material";
import { IconCross } from "@tabler/icons";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemove = (event) => {
    setSearchTerm("");
    onSearch("");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <Input
        type="text"
        placeholder="חפש לפי שם"
        aria-label="search"
        value={searchTerm}
        color={"success"}
        onChange={handleChange}
        endAdornment={
          searchTerm.length > 0 ? (
            <InputAdornment position="start">
              <Close onClick={handleRemove} style={{ cursor: "pointer" }} />
            </InputAdornment>
          ) : (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          )
        }
      />
    </div>
  );
};

export default SearchBar;
