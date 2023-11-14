import React from "react";
import "./style.css";

type NutriscoreProps = {
  scoreValue: string,
};

const Nutriscore: React.FC<NutriscoreProps> = ({
  scoreValue
}) => {
    const bgColor = `${scoreValue.toUpperCase()}-label`;

    return (
        <section className={`nutriscore-container ${bgColor}`}>
            <p className="nutriscore-label">{scoreValue}</p>
        </section>
    )
};

export default Nutriscore;
export type { NutriscoreProps };