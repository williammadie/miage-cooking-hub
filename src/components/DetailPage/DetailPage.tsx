import React, {Component} from 'react';
import "./style.css";
import Category from '../Category/Category';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import {DetailMealDTO} from "../../dto/DetailMealDTO";


const DetailPage : React.FC<DetailMealDTO> = (recipeData: DetailMealDTO) => {
    function extractVideoIdFromUrl(url: string):string {

        const regEx = /(?:\?v=|\/embed\/|\/watch\?v=|\/)([a-zA-Z0-9_-]{11})/;

        const match = url.match(regEx);

        if (match && match.length > 1) {
            return match[1];
        } else {
            return "";
        }
    }
    const videoIdd :string  = extractVideoIdFromUrl(recipeData.strYoutube);

    const instructions = recipeData.strInstructions.split('\\r\\').map((instruction: any, index: number) => (
        <li key={index} className="text" dangerouslySetInnerHTML={{__html: instruction}}/>
    ));
    return (
        <div className="container">
            <h1 className="title">{recipeData.strMeal}</h1>
            <div className="text">Category:</div>
            <Category category={recipeData.strCategory}/>
            <p className="text">Area: {recipeData.strArea}</p>
            <div className="content-header">
                <div className="section-image">
                    <img src={recipeData.strMealThumb} alt={recipeData.strMeal} className="image"/>
                    <p className="text">Tags: {recipeData.strTags}</p>
                </div>
                <div className="section-list-ingredient">
                    <h2 className="subtitle">Ingredients</h2>
                    <ul className="list">
                        {recipeData.ingredients.map((ingredient, index) => (
                            <li key={index}
                                className="list-item">{`${ingredient.ingredient} : ${ingredient.measure}`}</li>
                        ))}
                    </ul>
                </div>
                {videoIdd && (
                    <div className="video-container">
                        <YouTubeVideo videoId={videoIdd}/>
                    </div>
                )}

            </div>
            <div className="text">Instructions:</div>
            <div className="list-instruction">
                {instructions}
            </div>


            <p className="text">
                Source:{' '}
                <a href={recipeData.strSource} target="_blank" rel="noopener noreferrer" className="link">
                    Read More
                </a>
            </p>
        </div>
    );
}

export default DetailPage;