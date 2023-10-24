import React from 'react';
import './style.css';

export type CategoryProps = {
    category: string;
}

const categoryColors = {
    Beef: 'red',
    Breakfast: 'orange',
    Chicken: 'yellow',
    Dessert: 'green',
    Goat: 'blue',
    Lamb: 'purple',
    Miscellaneous: 'pink',
    Pasta: 'teal',
    Pork: 'cyan',
    Seafood: 'indigo',
    Side: 'lime',
    Starter: 'amber',
    Vegan: 'brown',
    Vegetarian: 'grey',
    'Ordinary Drink': 'red',
    Cocktail: 'orange',
    Shake: 'yellow',
    'Other / Unknown': 'green',
    Cocoa: 'blue',
    Shot: 'purple',
    'Coffee / Tea': 'pink',
    'Homemade Liqueur': 'teal',
    'Punch / Party Drink': 'cyan',
    Beer: 'indigo',
    'Soft Drink': 'lime',
};
const Category: React.FC<CategoryProps> = ({
    category
}) =>{
    const categoryClassName: string = categoryColors[category as keyof typeof categoryColors] || 'grey';//|| 'grey';
    return (
        <div className={`category-chip ${categoryClassName}`}>
            {category}
        </div>
    );
};

export default Category;

