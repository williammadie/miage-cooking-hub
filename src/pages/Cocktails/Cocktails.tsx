import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeType from "../../constants/RecipeType";
import SearchRecipes from "../SearchRecipes/SearchRecipes";
import { useCocktailsByName } from "../../hooks/cocktails/useCocktailsByName";

import "./style.css";

const Cocktails: React.FC<{}> = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading, error } = useCocktailsByName(searchInput);

  return (
    <section className="main">
      <div className="title">
        <h1 className={"title-1 primaryColor"}>Cocktails Page</h1>
        <div className="search-bar">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
            key={RecipeType.Cocktail}
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
