/* eslint-disable react-hooks/exhaustive-deps */
     
import React, {useState,useEffect} from "react";
import './App.css';
import Recipes from './Recipes';
const App=()=>{
  const APP_ID="7435929d";
  const APP_KEY = "bf1796372434aade824aede4e7053fd8";

  const  [recipes,setRecipes]=useState([]);
  const  [search,setSearch]=useState('');
  const  [query,setQuery]=useState('Pizza');

  useEffect(() => {
    getRecipe();
  },[query] );
//to run this only once

  const getRecipe=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //q there means query ,jo bhi uske baad likhenge wo search hoga
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch=event=>{
    setSearch(event.target.value);
    
  };
  const getSearch=event=>{
    event.preventDefault();
    setQuery(search);
    setSearch("");
    };
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text"  value={search} onChange={updateSearch}/>
           <button  className="search-button" type="submit"> Search </button>   
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
