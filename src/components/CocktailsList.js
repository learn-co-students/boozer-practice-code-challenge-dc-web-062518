import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {

  list = ()=>{

  }

  render(){
    return (
      <div id="cocktail-list">

        {this.props.cocktails.map(cocktail=> <Cocktail onClick= {this.props.onClick} cocktail= {cocktail} key= {cocktail.id} />)}
      </div>
    )
  }
}

export default CocktailsList
