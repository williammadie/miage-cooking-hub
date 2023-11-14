import React from "react";
import { Skeleton } from "@mui/material";

import "./style.css";
import NutritionInfoDTO from "../../dto/NutritionInfoDTO";
import NutritionInfoCard from "../../components/NutritionInfoCard/NutritionInfoCard";

const NB_SKELETON_LOADER = 18;
type SearchRecipesProps = {
  data: NutritionInfoDTO[] | null;
  isLoading: boolean;
  error: unknown;
};

const SearchRecipes: React.FC<SearchRecipesProps> = ({
  data,
  isLoading,
  error,
}) => {
  let searchResults;
  if (isLoading) {
    searchResults = (
      <section className={"search-results"}>
        {Array.from({ length: NB_SKELETON_LOADER }, (_, index) => (
          <Skeleton
            style={{ margin: 10, borderRadius: 15 }}
            variant="rounded"
            width={450}
            height={100}
            key={index}
          />
        ))}
      </section>
    );
  } else if (data) {
    data.sort((a, b) => a.nutritionScore.localeCompare(b.nutritionScore))
    searchResults = (
      <section className="search-results">
        {data.map((item) => (
          <NutritionInfoCard
            key={item.id}
            brandName={item.brandName}
            genericName={item.genericName}
            nutriscore={item.nutritionScore}
            novaIndex={item.novaIndex}
            openFoodFactsURL={item.openFoodFactsURL}
            imgURL={item.imgURL}
          ></NutritionInfoCard>
        ))}
      </section>
    );
  } else {
    const failureInfoMsg = error
      ? "Service unavailable at the moment :("
      : "No result found";
    searchResults = (
      <section className="no-recipe-found">
        <p>{failureInfoMsg}</p>
      </section>
    );
  }

  return <>{searchResults}</>;
};

export default SearchRecipes;
