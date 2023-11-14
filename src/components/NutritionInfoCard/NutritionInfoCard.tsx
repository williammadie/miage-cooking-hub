import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import Nutriscore from "../Nutriscore/Nutriscore";

type NutritionInfoCardProps = {
  brandName: string;
  nutriscore: string;
};

const NutritionInfoCard: React.FC<NutritionInfoCardProps> = ({brandName, nutriscore}) => {
    const { darkMode } = useContext(DarkModeContext);
    
    return (
    <article
      className={`preview-recipe-card ${
        darkMode ? "second-background-dark" : "background-light"
      }`}
    >
      <section>
        <h2>{brandName}</h2>
      </section>
      <section className="preview-recipe-title">
        <Nutriscore scoreValue={nutriscore}></Nutriscore>
      </section>
    </article>
  );
}

export default NutritionInfoCard;
export type { NutritionInfoCardProps };