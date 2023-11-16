import React from "react";
import "./style.css";
import { Tooltip } from "@mui/material";

type NutriscoreProps = {
  scoreValue?: string;
};
const POSSIBLE_GRADES: Array<string> = ["A", "B", "C", "D", "E"];

const Nutriscore: React.FC<NutriscoreProps> = ({ scoreValue }) => {
  let bgColor = `${scoreValue?.toUpperCase()}-label`;

  if (
    scoreValue === undefined ||
    !POSSIBLE_GRADES.includes(scoreValue.toUpperCase())
  ) {
    bgColor = "unknown-label";
    scoreValue = "?";
  }

  return (
    <Tooltip title="Nutritional Quality Score A-E" arrow>
      <section className={`nutriscore-container ${bgColor}`}>
        <p className="nutriscore-label">{scoreValue}</p>
      </section>
    </Tooltip>
  );
};

export default Nutriscore;
export type { NutriscoreProps };
