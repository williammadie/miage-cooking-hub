import React from "react";
import "./style.css";
import { Tooltip } from "@mui/material";

type NovascoreProps = {
  scoreValue?: number;
};
// eslint-disable-next-line no-magic-numbers
const POSSIBLE_GRADES: Array<number> = [1, 2, 3, 4, 5];

const Novascore: React.FC<NovascoreProps> = ({ scoreValue }) => {
  let bgColor = `N${scoreValue}-label`;
  const scoreToPrint: string =
    scoreValue !== undefined ? scoreValue.toString() : "?";

  if (scoreValue === undefined || !POSSIBLE_GRADES.includes(scoreValue)) {
    bgColor = "unknown-label";
  }

  return (
    <Tooltip title="Level of Processing of Foods 1-4" arrow>
      <section className={`novascore-container ${bgColor}`}>
        <p className="novascore-label">{scoreToPrint}</p>
      </section>
    </Tooltip>
  );
};

export default Novascore;
export type { NovascoreProps };
