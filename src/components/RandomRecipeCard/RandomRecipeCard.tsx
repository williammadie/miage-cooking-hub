import React, { MouseEventHandler, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import fallbackImg from "../../assets/img-not-found.png";
import ytLogo from "../../assets/yt-logo.png";
import { DarkModeContext } from "../../context/DarkModeContext";
import Category from "../Category/Category";

type RandomRecipeCardProps = {
  title: string;
  description: string;
  img: string;
  category: string;
  ytLink: string;
  onClickAction: MouseEventHandler;
};

const RandomRecipeCard: React.FC<RandomRecipeCardProps> = ({
  title,
  description,
  img,
  category,
  ytLink,
  onClickAction,
}) => {
  const [imgSrc, setImgSrc] = useState(img);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <article
      className={`recipe-card ${darkMode ? "second-background-dark " : ""}`}
      onClick={onClickAction}
    >
      <section className="recipe-img-wrapper">
        <img
          src={imgSrc ? imgSrc : fallbackImg}
          alt={`Recipe ${title}`}
          className="recipe-img"
          onError={() => setImgSrc(fallbackImg)}
        />
      </section>
      <section className="recipe-info">
        <section className="recipe-info-row">
          <div className="recipe-category-wrapper">
            <Category category={category} />
          </div>
          {ytLink !== undefined && ytLink !== null && ytLink !== "" && (
            <div className="recipe-yt-wrapper">
              <Link to={ytLink} target="_blank">
                <img
                  src={ytLogo}
                  alt="Youtube Recipe"
                  className="recipe-yt-img"
                />
              </Link>
            </div>
          )}
        </section>
        <h3
          className={` ${darkMode ? "color-font-light " : "color-font-dark"}`}
        >
          {title}
        </h3>
        <div className="recipe-description">
          <p
            className={`description-card ${
              darkMode ? "color-font-light " : "color-font-dark"
            }`}
          >
            {description}
          </p>
        </div>
      </section>
    </article>
  );
};

export default RandomRecipeCard;
export type { RandomRecipeCardProps };
