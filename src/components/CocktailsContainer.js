import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  state={
    cocktails: [],
    ingredients: [],
    proportions: [],
    currentCocktail: null
  }

  componentDidMount = ()=>{
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(r=> r.json())
    .then(allCocktails => {
      this.setState({cocktails: allCocktails})})

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(r=> r.json())
    .then(allIngredients => {
      this.setState({ingredients: allIngredients})})

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
    .then(r=> r.json())
    .then(allProportions => {
      this.setState({proportions: allProportions})})
  }

  onClick = name=>{
    let selectedCocktail = this.state.cocktails.find(cocktail=> cocktail.name === name)
    this.setState({currentCocktail: selectedCocktail})
  }

  proportions= ()=>{
    let arr = []
    this.state.proportions.forEach(proportion=>{
      if(proportion.cocktail_id === this.state.currentCocktail.id){
        this.state.ingredients.forEach(ingredient=>{
          if(ingredient.id === proportion.ingredient_id){
            arr.push({name: ingredient.name, quantity: proportion.amount})
          }
        })
      }
    })
    return arr
  }

  cocktailDisplayRender = ()=>{
    if(this.state.currentCocktail !== null)
    {return <CocktailDisplay cocktail= {this.state.currentCocktail} proportions= {this.proportions()} />}
  }

  render(){
    return (
      <div className="container">
        <CocktailsList cocktails= {this.state.cocktails} onClick= {this.onClick}/>
        {this.cocktailDisplayRender()}
        <Form />
      </div>
    )
  }
}

export default CocktailsContainer
