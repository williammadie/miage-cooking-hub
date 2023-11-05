import React, { MouseEventHandler, useState } from "react";
import "./style.css";
import Category from "../Category/Category";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";
import IngredientDTO from "../../dto/IngredientDTO";
import goBackIcon from "../../assets/goBackIcon.png";

const NOT_FOUND_IN_STR: number = -1;
const INDEX_UN: number = 1;

export type FullRecipe = {
  id: string;
  name: string;
  instructions: string;
  area: string;
  category: string;
  thumbnailUrl: string;
  youtubeRecipe: string;
  tags: string[];
  source: string;
  ingredients: IngredientDTO[];
  goBackAction: MouseEventHandler;
};
const DetailPage: React.FC<FullRecipe> = (recipeData: FullRecipe) => {
  const videoId: string | null = recipeData.youtubeRecipe
    ? extractVideoIdFromUrl(recipeData.youtubeRecipe)
    : null;
  const instructions = recipeData.instructions
    .split("\r\n")
    .filter((instruction) => instruction !== "");
  const [barredItems, setBarredItems] = useState<number[]>([]);

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

  const toggleBarredItem = (index: number) => {
    if (barredItems.includes(index)) {
      setBarredItems(barredItems.filter((item) => item !== index));
    } else {
      setBarredItems([...barredItems, index]);
    }
  };

  return (
    <div className="container">
      <button onClick={recipeData.goBackAction} className={"goBackButton"}>
        <img src={goBackIcon} alt={"back button"} />
      </button>
      <h1 className="title primaryColor">{recipeData.name}</h1>
      {/*<div className="text">Category:</div>*/}
      <Category category={recipeData.category} />
      {/* <p className="text">Tags: {recipeData.tags}</p>
            <p className="text">Area: {recipeData.area}</p>*/}
      <div className="content-header">
        <div className={"image-ingredient"}>
          <img
            src={recipeData.thumbnailUrl}
            alt={recipeData.name}
            className="image"
          />
          <div className="section-list-ingredient">
            <h2 className="subtitle primaryColor">Ingredients</h2>
            <ul className="list">
              {recipeData.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="list-item"
                >{`${ingredient.ingredient} : ${ingredient.measure}`}</li>
              ))}
            </ul>
          </div>
        </div>
        {videoId && (
          <div className="video-container">
            <div className={"video"}>
              <YouTubeVideo videoId={videoId} />
            </div>
          </div>
        )}
      </div>

      <h2 className={"instruction primaryColor"}>Instructions:</h2>
      <div className="list-instruction">
        <ul>
          {instructions.map((instruction: any, index: number) => (
            <li
              key={index}
              className={`text ${
                barredItems.includes(index) ? "barred-text" : ""
              }`}
              onClick={() => toggleBarredItem(index)}
            >
              <p className={"index primaryColor"}>{index + INDEX_UN}</p>
              <p dangerouslySetInnerHTML={{ __html: instruction }} />
            </li>
          ))}
        </ul>
      </div>
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
