import React from "react";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

import "./style.css";
import RecipeType from "../../constants/RecipeType";

const NB_SKELETON_LOADER = 18;
type SearchRecipesProps = {
  recipeType: RecipeType;
  data: PreviewRecipeDTO[] | null;
  isLoading: boolean;
  error: unknown;
};

const SearchRecipes: React.FC<SearchRecipesProps> = ({
  recipeType,
  data,
  isLoading,
  error
}) => {
  const navigate = useNavigate();

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
    <>
    {searchResults}
    </>
  );
};

export default SearchRecipes;
