import React, {Component} from 'react';
import "./style.css";

const DetailPage = (recipeData) => {
    return (
        <div className="container">
            <h1 className="title">{recipeData.strMeal}</h1>
            <p className="text">Category: {recipeData.strCategory}</p>
            <p className="text">Area: {recipeData.strArea}</p>
            <p className="text">Instructions: {recipeData.strInstructions}</p>
            <img src={recipeData.strMealThumb} alt={recipeData.strMeal} className="image"/>
            <p className="text">Tags: {recipeData.strTags}</p>
            <p className="text">
                YouTube Link:{' '}
                <a href={recipeData.strYoutube} target="_blank" rel="noopener noreferrer" className="link">
                    Watch Video
                </a>
            </p>

            <h2 className="subtitle">Ingredients</h2>
            <ul className="list">
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-item">{`${ingredient.ingredient} - ${ingredient.measure}`}</li>
                ))}
            </ul>

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