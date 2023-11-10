import React, { useState } from "react";
import searchBarImg from "../../assets/magnifying-glass.png";

import "./style.css";

type SearchBarProps = {
  receiveMeals: (meals: any) => void;
  savedSearchQuery: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ receiveMeals, savedSearchQuery }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        receiveMeals(searchInput);
        window.sessionStorage.setItem(savedSearchQuery, searchInput);
      }}
    >
      <input
        type="search"
        placeholder="Search here"
        value={searchInput}
        onChange={(s) => setSearchInput(s.target.value)}
      />
      <button type="button" onClick={() => receiveMeals(searchInput)}>
        <img
          src={searchBarImg}
          className="magnifier-img"
          alt="magnifying-glass"
        ></img>
      </button>
    </form>
  );
};

export default SearchBar;
export type { SearchBarProps };
