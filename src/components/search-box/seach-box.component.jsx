import React from "react";
import "../search-box/seach-box.styles.css";

export const SearchBox = ({ placeholder2, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder2}
    onChange={handleChange}

    // onChange={dude => this.setState({ searchfield: dude.target.value })}
  ></input>
);
