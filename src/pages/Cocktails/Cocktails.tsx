import React, {useEffect, useState} from "react";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import CocktailService from "../../services/CocktailService";
import "./style.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import {RecipeType} from "../../constants/RecipeTypes";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState<PreviewRecipeDTO[]>([]);
  const [searchInput, setSearchInput] = useState("martini");

  useEffect(() => {
    async function fetchCocktailsbyName() {
      const cocktailsData: PreviewRecipeDTO[] =
        await CocktailService.getRecipesByName(searchInput);
      setCocktails(cocktailsData);
    }

    fetchCocktailsbyName();
  }, [cocktails.length, searchInput]);

  return (
    <section className="main">
      <div className="title">
        <h1>Cocktails Page</h1>
        <div className="search-bar">
          <SearchBar
            receiveMeals={(searchInput) => setSearchInput(searchInput)}
          />
        </div>
      </div>
      <section className="search-results">
        {cocktails.map((item) => (
          <PreviewRecipeCard
            id={item.id}
            title={item.name}
            img={item.thumbnailUrl}
            type={RecipeType.Cocktail}
          ></PreviewRecipeCard>
        ))}
      </section>
    </section>
  );
}
