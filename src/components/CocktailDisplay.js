import React from 'react'

const CocktailDisplay = (props) => {
  console.log(props.ingredients)
  return (
    <div id="cocktail-display">
      <h1>{props.cocktail.name}</h1>
      <h3>{props.cocktail.description}</h3>
      <p>{props.cocktail.instructions}</p>
      <h2>Ingredients</h2>
      <ul>
        {props.proportions.map(prop => <li><b>{prop.amount}</b> {props.ingredients.find(i => i.id === prop.ingredient_id).name}</li>)}
      </ul>
    </div>
  )
}

export default CocktailDisplay
