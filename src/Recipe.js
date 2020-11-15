import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))};
            </ul>
            <img className={style.image} src={image} alt="Recipe"/>
        </div>
    );
};

export default Recipe;