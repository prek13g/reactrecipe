import React from 'react';
import style from './recipe.module.css';

const Recipes=(props)=>{
    return(<div className={style.recipe}>
    <h1 >{props.title}</h1>
    <p>{props.calories}</p>
    <ol>
      {props.ingredients.map(ingredient=>(
          <li>{ingredient.text}</li>
      ))}
    </ol>
    <img className={style.img} src={props.image} alt=""/>
    <br/>
    <br/>

    </div>)
}


export default Recipes;