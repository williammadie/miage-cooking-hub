import React, { useContext } from "react";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

import "./style.css";
import RecipeType from "../../constants/RecipeType";
import { DarkModeContext } from "../../context/DarkModeContext";

const NB_SKELETON_LOADER = 18;
type SearchRecipesProps = {
  recipeType: RecipeType;
  data: PreviewRecipeDTO[] | null;
  isLoading: boolean;
  error: unknown;
  isRecipeSearch: boolean;
};
const SearchRecipes: React.FC<SearchRecipesProps> = ({
  recipeType,
  data,
  isLoading,
  error,
  isRecipeSearch,
}) => {

  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

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
  } else if (data !== null && data.length !== 0) {
    searchResults = (
      <section className="search-results">
        {data.map((item) => (
          <PreviewRecipeCard
            key={item.id}
            title={item.name}
            img={item.thumbnailUrl}
            onClickAction={() =>
              navigate(`/${recipeType}/${item.id}`, {
                state: { lastPage: recipeType },
              })
            }
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
        <p
          className={
            darkMode
              ? "color-font-light hover-shadow-light"
              : "color-font-dark hover-shadow-dark"
          }
        >
          {failureInfoMsg}
        </p>
      </section>
    );
  }

  return <>{searchResults}</>;
};

export default SearchRecipes;
