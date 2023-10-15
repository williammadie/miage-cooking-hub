import React, { useState } from "react";
import "./style.css";

import fallbackImg from "../../assets/img-not-found.png";

type PreviewRecipeCardProps = {
    title: string;
    img: string; 
};

const PreviewRecipeCard: React.FC<PreviewRecipeCardProps> = ({title, img}) => {
    
    const [imgSrc, setImgSrc] = useState(img);
    
    return (
        <article className="preview-recipe-card">
            <section className="preview-recipe-img-wrapper">
                <img src={imgSrc ? imgSrc : fallbackImg} alt={`Recipe ${title}`} className="preview-recipe-img" onError={() => setImgSrc(fallbackImg)}/>
            </section>
            <section className="preview-recipe-title">
                <h2>{title}</h2>
            </section>
        </article>
    )
}

export default PreviewRecipeCard;
export type { PreviewRecipeCardProps };