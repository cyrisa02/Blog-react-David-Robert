import React, { useEffect } from 'react';
import axios from 'axios';

const Mealaxios = () => {
    let meal = null;


    useEffect(() => {


        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response)=> {
            
        });
    });

    return (
        <>
        {meal ? (
            <article>
            <h2>{meal.strMeal}</h2>            
        </article>
        ) : (
            <p>Pas de recette/// strMeal vient du tableau json. </p>
        )}
        </>
    );
};

export default Mealaxios;