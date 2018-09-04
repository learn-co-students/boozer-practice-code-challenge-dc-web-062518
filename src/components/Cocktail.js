import React from 'react'

const Cocktail = (props) => {
  return (
    <li><a onClick={props.showCocktail}>{props.name}</a></li>
  )
}

export default Cocktail
