import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import fallbackImg from "../../assets/img-not-found.png";
import ytLogo from "../../assets/yt-logo.png";

type RandomRecipeCardProps = {
    title: string;
    description: string;
    img: string;
    category: string;
    ytLink: string;
};


const RandomRecipeCard: React.FC<RandomRecipeCardProps> = ({title, description, img, category, ytLink}) => {

    const [imgSrc, setImgSrc] = useState(img);

    return (
        <article className="recipe-card">
           <section className="recipe-img-wrapper">
                <img src={imgSrc ? imgSrc : fallbackImg} alt={`Recipe ${title}`} className="recipe-img" onError={() => setImgSrc(fallbackImg)}/> 
           </section>
           <section className="recipe-info">
                <section className="recipe-info-row">
                    <div className="recipe-category-wrapper">
                        <div className="recipe-category">
                            <p className="recipe-category-label">{category}</p> 
                        </div>
                    </div>
                    {
                        ytLink !== undefined && (
                            <div className="recipe-yt-wrapper">
                                <Link to={ytLink} target="_about">
                                    <img src={ytLogo} alt="Youtube Recipe" className="recipe-yt-img"/>
                                </Link>
                            </div>
                        )
                    }
                </section>
                <h2>{title}</h2>
                <div className="recipe-description">
                    <p>{description}</p>
                </div>
           </section>
        </article>
    )
}

export default RandomRecipeCard;
export type { RandomRecipeCardProps };