import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import fallbackImg from "../../assets/img-not-found.png";
import Nutriscore from "../Nutriscore/Nutriscore";

import "./style.css";
import Novascore from "../Novascore/Novascore";

type NutritionInfoCardProps = {
  brandName: string;
  genericName: string;
  nutriscore: string;
  novaIndex: number;
  openFoodFactsURL: string;
  imgURL: string;
};

const NutritionInfoCard: React.FC<NutritionInfoCardProps> = ({
  brandName,
  genericName,
  nutriscore,
  novaIndex,
  openFoodFactsURL,
  imgURL,
}) => {
  const { darkMode } = useContext(DarkModeContext);
  const [imgSrc, setImgSrc] = useState(imgURL);

  return (
    <a href={openFoodFactsURL} target="_blank" rel="noreferrer">
      <article
        className={`nutrition-info-card ${
          darkMode ? "second-background-dark" : "background-light"
        }`}
      >
        <section className="nutriscore-img-wrapper">
          <img
            src={imgSrc ? imgSrc : fallbackImg}
            alt={`Product ${genericName}`}
            className="nutriscore-img"
            onError={() => setImgSrc(fallbackImg)}
          />
        </section>

        <section className="product-attributes">
          <div className="product-brand-container">
            <p
              className={`product-brand ${
                darkMode ? "color-font-light " : "color-font-dark"
              }`}
            >
              {brandName}
            </p>
          </div>
          <div className="product-name-container">
            <p
              className={`product-name ${
                darkMode ? "color-font-light " : "color-font-dark"
              }`}
            >
              {genericName}
            </p>
          </div>
        </section>

        <section className="product-score-container">
          <Nutriscore scoreValue={nutriscore}></Nutriscore>
        </section>
        <section className="product-score-container">
          <Novascore scoreValue={novaIndex}></Novascore>
        </section>
      </article>
    </a>
  );
};

export default NutritionInfoCard;
export type { NutritionInfoCardProps };
