import React, { useState } from "react";
import "./style.css";
import fallbackImg from "../../assets/img-not-found.png";
import { RecipeType } from "../../constants/RecipeTypes";
import { useNavigate } from "react-router-dom";

type PreviewRecipeCardProps = {
  id: string;
  title: string;
  img: string;
  type: RecipeType;
};

const PreviewRecipeCard: React.FC<PreviewRecipeCardProps> = ({
  id,
  title,
  img,
  type,
}) => {
  const [imgSrc, setImgSrc] = useState(img);
  const navigate = useNavigate();
  function redirectionDetail() {
    if (type === RecipeType.Meal) {
      navigate(`/meal/${id}`);
    } else {
      navigate(`/cocktail/${id}`);
    }
  }

  return (
    <article className="preview-recipe-card" onClick={redirectionDetail}>
      <section className="preview-recipe-img-wrapper">
        <img
          src={imgSrc ? imgSrc : fallbackImg}
          alt={`Recipe ${title}`}
          className="preview-recipe-img"
          onError={() => setImgSrc(fallbackImg)}
        />
      </section>
      <section className="preview-recipe-title">
        <h2>{title}</h2>
      </section>
    </article>
  );
};

export default PreviewRecipeCard;
export type { PreviewRecipeCardProps };
