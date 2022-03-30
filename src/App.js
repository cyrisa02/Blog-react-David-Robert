import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Meal from './Meal';
import  { useEffect, useState } from 'react';

const App = () => {

  const [meal, setMeal] = useState(null
    //{
    //strMeal: "Valeur par défaut ; Paté en croute, c'est très rapide"
    //}
);

useEffect(() => {
  (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await fetch (url);

      const mealsFromApi = await response.json();

      setMeal(mealsFromApi.meals[0]);  //avec le state on a modifié cette ligne
      
      
  })();
}, []); // mettre le tableau vide sinon ça tourne à l'infini

  return (
    <div className="App">
      <header className="App-header">
        <p>Bonsoir aux étudiants!!!</p>
      </header>
      <Meal meal={meal}/>
      
      </div>
    );


}

export default App;
