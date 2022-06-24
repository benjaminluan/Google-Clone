import React, { useState } from "react";
import "../components/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    if (input !== "") {
      e.preventDefault();
      navigate("/search");
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
    } else console.log("nothing")
  };

  return (
    /* Change it to a Form so when the button type is "submit" it triggers enter key */
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div
        className={!hideButtons ? "search__buttons" : "search__buttons-hidden"}
      >
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default Search;
