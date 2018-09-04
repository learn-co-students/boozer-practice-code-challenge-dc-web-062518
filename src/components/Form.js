import React, { Component, Fragment } from 'react'

const IngredientInput = (props) => {
  return (
    <div className="container">
      <p>Ingredient Name<br/>
      <input type="text"/>
      </p>

      <p>Quantity<br/>
      <input type="text"/>
      </p>
    </div>
  )
}

class Form extends Component {
  constructor() {
    super()
    this.state = {
      numInputs: 1
    }
  }

  addIngredientInput = (e) => {
    e.preventDefault()
    this.setState({numInputs: this.state.numInputs + 1})
  }

  allIngredientInputs = () => {
    let inputArray = []
    for (let i = 0; i < this.state.numInputs; i++) {
      inputArray.push(<IngredientInput />)
    }
    return inputArray
  }

  createCocktail = (e) => {
    e.preventDefault()
    e.persist()
    let inputs = e.target.querySelectorAll('input')
  }

  updateName = (e) => {
    e.persist()
  }

  render(){
    return (
      <form onSubmit={this.createCocktail}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text"/>

        <p>Description</p>
        <input type="text"/>

        <p>Instructions</p>
        <input type="text"/>

        <h3>Proportions</h3>
        {this.allIngredientInputs()}

        <p><button onClick={this.addIngredientInput}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
