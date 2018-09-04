import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  constructor () {
    super()
    this.state = {
      cocktails: [],
      ingredients: [],
      proportions: [],
      showCocktail: '',
      showProportions: []
    }
  }

  showCocktail = (cocktail) => {
    this.setState({showCocktail: cocktail})
    this.findProportions(cocktail.id)
  }

  findProportions = (id) => {
    let props = this.state.proportions.filter(prop => prop.cocktail_id === id)
    this.setState({showProportions: props})

  }

  findIngredient = (id) => {
    return this.state.ingredients.find(ing => ing.id === id)
  }

  componentDidMount() {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
      .then(r => r.json())
      .then(cocktails => this.setState({cocktails}))
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
      .then(r => r.json())
      .then(ingredients => this.setState({ingredients}))
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
      .then(r => r.json())
      .then(proportions => this.setState({proportions}))
  }

  render(){
    return (
      <div className="container">
        <CocktailsList
          cocktails={this.state.cocktails}
          showCocktail={this.showCocktail}  />
        {this.state.showCocktail !== '' ? <CocktailDisplay
          cocktail={this.state.showCocktail}
          proportions={this.state.showProportions}
          ingredients={this.state.showProportions.map(prop => this.findIngredient(prop.ingredient_id))}
          /> : null}
        <Form />
      </div>
    )
  }
}

export default CocktailsContainer
