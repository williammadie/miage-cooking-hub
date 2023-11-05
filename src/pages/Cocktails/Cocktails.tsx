import React, { useEffect, useState } from "react";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import CocktailService from "../../services/CocktailService";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import NoResultFoundError from "../../errors/NoResultFoundError";

export default function Cocktails() {
  const [cocktails, setCocktails] = useState<PreviewRecipeDTO[]>([]);
  const [searchInput, setSearchInput] = useState("martini");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cannotReachAPI, setCannotReachAPI] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCocktailsbyName() {
      try {
        const cocktailsData: PreviewRecipeDTO[] =
          await CocktailService.getRecipesByName(searchInput);
        setCocktails(cocktailsData);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof NoResultFoundError) {
          setCannotReachAPI(true);
          setIsLoading(false);
        } else {
          throw err;
        }
      }
    }

    fetchCocktailsbyName();
  }, [cocktails.length, searchInput]);

  if (isLoading) {
    return (
      <section className="main">
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  const failureInfoMsg = cannotReachAPI
    ? "Service unavailable at the moment :("
    : "No cocktail found";
  let searchResults = (
    <section className="no-meal-found">
      <p>{failureInfoMsg}</p>
    </section>
  );

  if (cocktails.length > 0) {
    searchResults = (
      <section className="search-results">
        {cocktails.map((item) => (
          <PreviewRecipeCard
            title={item.name}
            img={item.thumbnailUrl}
            onClickAction={() => navigate(`/cocktail/${item.id}`)}
          ></PreviewRecipeCard>
        ))}
      </section>
    );
  }

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
      {searchResults}
    </section>
  );
}
