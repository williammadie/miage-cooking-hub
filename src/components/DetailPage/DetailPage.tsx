import React from "react";
import "./style.css";
import Category from "../Category/Category";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";
import IngredientDTO from "../../dto/IngredientDTO";
import {useNavigate} from "react-router-dom";
import {RecipeType} from "../../constants/RecipeTypes";
import goBackIcon from "../../assets/goBackIcon.png"


const NOT_FOUND_IN_STR: number = -1;

export type FullRecipe = {
  id: string;
  name: string;
  instruction: string;
  area: string;
  category: string;
  thumbnailUrl: string;
  youtubeRecipe: string;
  tags: string[];
  source: string;
  ingredients: IngredientDTO[];
  type: RecipeType;
};
const DetailPage: React.FC<FullRecipe> = (recipeData: FullRecipe) => {
    const navigate = useNavigate();
    const videoId: string | null = recipeData.youtubeRecipe? extractVideoIdFromUrl(recipeData.youtubeRecipe) : null;
    const instructions = recipeData.instruction
        .split("\\r\\")
        .map((instruction: any, index: number) => (
            <li
                key={index}
                className="text"
                dangerouslySetInnerHTML={{ __html: instruction }}
            />
        ));

    function extractVideoIdFromUrl(url: string): string {
    const prefix = "https://www.youtube.com/watch?v=";
    const startIndex = url.indexOf(prefix);

    if (startIndex !== NOT_FOUND_IN_STR) {
      // Utilisez substring pour obtenir tout ce qui se trouve après le préfixe
      return url.substring(startIndex + prefix.length);
    } else {
      // Si le préfixe n'est pas trouvé, retournez null
      return "";
    }
  }
    function goBack() {
        if (recipeData.type === RecipeType.Meal) {
            navigate(`/meals`);
        } else if (recipeData.type === RecipeType.Cocktail) {
            navigate(`/cocktails`);
        }else {
            navigate(`/`);
        }
    }

    return (
    <div className="container">
        <button onClick={goBack} className={"goBackButton"}>
            <img src={goBackIcon} alt={"back button"}/>
        </button>
      <h1 className="title">{recipeData.name}</h1>
      <div className="text">Category:</div>
      <Category category={recipeData.category} />
      <p className="text">Area: {recipeData.area}</p>
      <div className="content-header">
        <div className="section-image">
          <img
            src={recipeData.thumbnailUrl}
            alt={recipeData.name}
            className="image"
          />
          <p className="text">Tags: {recipeData.tags}</p>
        </div>
        <div className="section-list-ingredient">
          <h2 className="subtitle">Ingredients</h2>
          <ul className="list">
            {recipeData.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="list-item"
              >{`${ingredient.ingredient} : ${ingredient.measure}`}</li>
            ))}
          </ul>
        </div>
        {videoId && (
          <div className="video-container">
            <YouTubeVideo videoId={videoId} />
          </div>
        )}
      </div>
      <div className="text">Instructions:</div>
      <div className="list-instruction">{instructions}</div>

      <p className="text">
        Source:{" "}
        <a
          href={recipeData.source}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Read More
        </a>
      </p>
    </div>
  );
};

export default DetailPage;
