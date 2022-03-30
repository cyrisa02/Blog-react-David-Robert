import React from 'react';
const Meal = ({ meal }) => {
  return (
    <div>
      {meal ? (
        <article>
          <h2>{meal.strMeal}</h2>
        </article>
      ) : (
        <p>Pas de recette/// strMeal vient du tableau json. -4'19</p>
      )}
    </div>
  );
};

export default Meal;
