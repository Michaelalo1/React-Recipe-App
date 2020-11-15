import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "1f26a0df";
  const APP_KEY = "ca5d541be03117ab6f2b60e123c5dc20";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const[query, setQuery] = useState('chicken');

  useEffect (() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(
      `${proxy}https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
        className="search-bar" 
        type="text"
        value={search}
        onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.calories}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>

  );
};
export default App;
