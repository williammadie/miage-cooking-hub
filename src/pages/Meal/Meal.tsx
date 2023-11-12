import React, {useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import DetailPage from "../../components/DetailRecipeCard/DetailRecipeCard";
  
import "./style.css";
import { useMealById } from "../../hooks/meals/useMealById";
import {DarkModeContext} from "../../context/DarkModeContext";

export default function Meal() {
  const id: string = String(useParams().id);
  const { data, isLoading, error } = useMealById(id);
  const navigate = useNavigate();
  const {darkMode} = useContext(DarkModeContext);

  if (isLoading) {
    return (
      <section className={`main ${darkMode ?'background-dark ' : "" }`}>
        <div className="loading-wrapper">
          <CircularProgress />
        </div>
      </section>
    );
  }

  if (!data || error) {
    return (
      <section className={`main ${darkMode ?'background-dark ' : "" }`}>
        <div>Nothing found for recipe with id {id}.</div>
      </section>
    );
  }

  return (
    <section className={`main ${darkMode ?'background-dark ' : "" }`}>
      <DetailPage
        id={data.id}
        name={data.name}
        instructions={data.instructions}
        area={data.area}
        category={data.category}
        thumbnailUrl={data.thumbnailUrl}
        youtubeRecipe={data.youtubeRecipe}
        tags={data.tags}
        source={data.source}
        ingredients={data.ingredients}
        goBackAction={() => navigate("/meals")}
      ></DetailPage>
    </section>
  );
}
