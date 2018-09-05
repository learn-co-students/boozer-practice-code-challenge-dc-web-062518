import React from 'react'

const CocktailDisplay = ({cocktail, proportions}) => {

  function renderIngredients(){
    return proportions.map(proportion=>{
      return <li>{`-${proportion.quantity} ${proportion.name}`}</li>
    })
  }

  return (

    <div id="cocktail-display">
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
      <p>{cocktail.instructions}</p>
      <h2>Ingredients</h2>
      {renderIngredients()}
      <ul>


      </ul>
    </div>
  )
}

export default CocktailDisplay
