import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeType from "../../constants/RecipeType";
import SearchRecipes from "../SearchRecipes/SearchRecipes";
import { useCocktailsByName } from "../../hooks/cocktails/useCocktailsByName";

import "./style.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const Cocktails: React.FC<{}> = () => {
  const storedSearchQuery: string | null = window.sessionStorage.getItem(
    RecipeType.Cocktail
  );
  const savedQuery = storedSearchQuery ? storedSearchQuery : "";
  const [searchInput, setSearchInput] = useState(savedQuery);
  const { data, isLoading, error } = useCocktailsByName(searchInput);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <div className="title">
        <h1 className={"title-1 primary-color"}>Cocktails Page</h1>
        <div className="search-bar">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
            key={RecipeType.Cocktail}
            savedSearchQuery={RecipeType.Cocktail}
          />
        </div>
      </div>
      <SearchRecipes
        recipeType={RecipeType.Cocktail}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
};

export default Cocktails;
