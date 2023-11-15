import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeType from "../../constants/RecipeType";
import SearchRecipes from "../SearchRecipes/SearchRecipes";
import { useCocktailsByName } from "../../hooks/cocktails/useCocktailsByTextQuery";
import "./style.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import SwitchSetting from "../../components/SwitchSetting/SwitchSetting";

const Cocktails: React.FC<{}> = () => {
  const storedSearchQuery: string | null = window.sessionStorage.getItem(
    RecipeType.Cocktail
  );
  const savedQuery = storedSearchQuery ? storedSearchQuery : "";
  const [searchInput, setSearchInput] = useState(savedQuery);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const { data, isLoading, error } = useCocktailsByName(searchInput, isChecked);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <div className="title">
        <h1 className={"title-1 primary-color"}>Cocktails Page</h1>
        <div className="search-bar">
        <div className="search-switch">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
            key={RecipeType.Cocktail}
            savedSearchQuery={RecipeType.Cocktail}
          />
          </div>
          <div className="search-switch">
           <SwitchSetting 
            switchStatus={(isChecked) => setIsChecked(isChecked)}
          />
          </div>
        </div>
      </div>
      <SearchRecipes
        recipeType={RecipeType.Cocktail}
        data={data}
        isLoading={isLoading}
        error={error}
        isRecipeSearch={isChecked}
      />
    </section>
  );
};

export default Cocktails;
