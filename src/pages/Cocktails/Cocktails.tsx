import React, { useEffect, useState } from "react";
import PreviewRecipeCard from "../../components/PreviewRecipeCard/PreviewRecipeCard";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import CocktailService from "../../services/CocktailService";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import NoResultFoundError from "../../errors/NoResultFoundError";

const NB_SKELETON_LOADER = 18;
export default function Cocktails() {
  const [cocktails, setCocktails] = useState<PreviewRecipeDTO[]>([]);
  const [searchInput, setSearchInput] = useState("martini");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cannotReachAPI, setCannotReachAPI] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCocktailsByName() {
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

    fetchCocktailsByName();
  }, [cocktails.length, searchInput]);

  let searchResults;
  if (isLoading) {
    searchResults = (
      <section className={"search-results"}>
        {Array.from({ length: NB_SKELETON_LOADER }, (_) => (
          <Skeleton
            style={{ margin: 10, borderRadius: 15 }}
            variant="rounded"
            width={400}
            height={100}
          />
        ))}
      </section>
    );
  } else if (cocktails.length > 0) {
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
  } else {
    const failureInfoMsg = cannotReachAPI
      ? "Service unavailable at the moment :("
      : "No cocktail found";
    searchResults = (
      <section className="no-meal-found">
        <p>{failureInfoMsg}</p>
      </section>
    );
  }

  return (
    <section className="main">
      <div className="title">
        <h1 className={"title-1 primaryColor"}>Cocktails Page</h1>
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
