import React, { useState } from "react";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

import "./style.css";
import RecipeType from "../../constants/RecipeType";
import { useCocktailsByName } from "../../hooks/useCocktailsByName";

const NB_SKELETON_LOADER = 18;
type SearchRecipesProps = {
  recipeType: RecipeType;
};
const SearchRecipes: React.FC<SearchRecipesProps> = ({
  recipeType,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const {data, isLoading, error} = useCocktailsByName(searchInput);

  let searchResults;
  if (isLoading) {
    searchResults = (
      <section className={"search-results"}>
        {Array.from({ length: NB_SKELETON_LOADER }, (_, index) => (
          <Skeleton
            style={{ margin: 10, borderRadius: 15 }}
            variant="rounded"
            width={400}
            height={100}
            key={index}
          />
        ))}
      </section>
    );
  } else if (data) {
    searchResults = (
      <section className="search-results">
        {data.map((item) => (
          <PreviewRecipeCard
            key={item.id}
            title={item.name}
            img={item.thumbnailUrl}
            onClickAction={() => navigate(`/${recipeType}/${item.id}`)}
          ></PreviewRecipeCard>
        ))}
      </section>
    );
  } else {
    console.error(error);
    const failureInfoMsg = error
      ? "Service unavailable at the moment :("
      : "No recipe found";
    searchResults = (
      <section className="no-recipe-found">
        <p>{failureInfoMsg}</p>
      </section>
    );
  }

  return (
    <section className="main">
      <div className="title">
        <h1 className={"title-1 primaryColor"}>{recipeType}s Page</h1>
        <div className="search-bar">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
            key={recipeType}
          />
        </div>
      </div>
      {searchResults}
    </section>
  );
};

export default SearchRecipes;
