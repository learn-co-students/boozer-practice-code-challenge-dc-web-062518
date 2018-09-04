import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
        <ul>
          {this.props.cocktails.map(cocktail => <Cocktail name={cocktail.name} showCocktail={() => this.props.showCocktail(cocktail)}/>)}
        </ul>
      </div>
    )
  }
}

export default CocktailsList
