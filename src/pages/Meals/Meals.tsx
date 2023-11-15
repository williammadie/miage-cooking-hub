import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeType from "../../constants/RecipeType";
import SearchRecipes from "../SearchRecipes/SearchRecipes";
import { useMealsByName } from "../../hooks/meals/useMealsByTextQuery";
import titleImg from "../../assets/fried-egg.png";
import "./style.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import SwitchSetting from "../../components/SwitchSetting/SwitchSetting";

const Meals: React.FC<{}> = () => {
  const storedSearchQuery: string | null = window.sessionStorage.getItem(
    RecipeType.Meal
  );
  const savedQuery = storedSearchQuery ? storedSearchQuery : "";
  const [searchInput, setSearchInput] = useState(savedQuery);
  const [isChecked, setIsChecked ] = useState<boolean>(true);
  const { data, isLoading, error } = useMealsByName(searchInput, isChecked);

  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`main ${darkMode ? "background-dark " : ""}`}>
      <div className="title">
        <h1 className={"title-1 primary-color"}>Meals Page
        <img
            src={titleImg}
            className="title-img"
            alt="fried-egg"
          ></img>
        </h1>
        <div className="search-bar">
          <div className="search-switch">
            <SearchBar
              receiveMeals={(searchInput) => setSearchInput(searchInput)}
              key={RecipeType.Meal}
              savedSearchQuery={RecipeType.Meal}
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
        recipeType={RecipeType.Meal}
        data={data}
        isLoading={isLoading}
        error={error}
        isRecipeSearch={isChecked}
      />
    </section>
  );
};

export default Meals;
