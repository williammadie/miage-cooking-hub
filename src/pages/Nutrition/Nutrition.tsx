import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeType from "../../constants/RecipeType";

import { DarkModeContext } from "../../context/DarkModeContext";
import { useNutritionInfo } from "../../hooks/nutrition/useNutritionInfo";
import NutritionResults from "../NutritionResults/NutritionResults";

const Nutrition: React.FC<{}> = () => {
  const storedSearchQuery: string | null = window.sessionStorage.getItem(
    RecipeType.Nutrition
  );
  const savedQuery = storedSearchQuery ? storedSearchQuery : "";
  const [searchInput, setSearchInput] = useState(savedQuery);
  const { data, isLoading, error } = useNutritionInfo(searchInput);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <div className="title">
        <h1 className={"title-1 primary-color"}>Nutrition Page</h1>
        <div className="search-bar">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
            key={RecipeType.Nutrition}
            savedSearchQuery={RecipeType.Nutrition}
          />
        </div>
      </div>
      <NutritionResults data={data} isLoading={isLoading} error={error} />
    </section>
  );
};

export default Nutrition;
