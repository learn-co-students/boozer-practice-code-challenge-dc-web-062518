import React from 'react'

const Cocktail = (props) => {
  return (
    <li onClick= {(e)=>props.onClick(e.target.innerText)}>
      {props.cocktail.name}
    </li>
  )
}

export default Cocktail
