import React, {MouseEventHandler, useContext, useState} from "react";
import "./style.css";
import fallbackImg from "../../assets/img-not-found.png";
import {DarkModeContext} from "../../context/DarkModeContext";

type PreviewRecipeCardProps = {
  title: string;
  img: string;
  onClickAction: MouseEventHandler;
};

const PreviewRecipeCard: React.FC<PreviewRecipeCardProps> = ({
  title,
  img,
  onClickAction,
}) => {
  const [imgSrc, setImgSrc] = useState(img);
  const {darkMode} = useContext(DarkModeContext);

  return (
    <article className={`preview-recipe-card ${darkMode ?'second-background-dark' : 'background-light'}`} onClick={onClickAction}>
      <section className="preview-recipe-img-wrapper">
        <img
          src={imgSrc ? imgSrc : fallbackImg}
          alt={`Recipe ${title}`}
          className="preview-recipe-img"
          onError={() => setImgSrc(fallbackImg)}
        />
      </section>
      <section className="preview-recipe-title">
        <h2 className={` ${darkMode ?'color-font-light ' : "color-font-dark" }`}>{title}</h2>
      </section>
    </article>
  );
};

export default PreviewRecipeCard;
export type { PreviewRecipeCardProps };
