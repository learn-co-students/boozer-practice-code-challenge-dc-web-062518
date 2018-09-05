import React, { Component } from 'react'


class Form extends Component {
  constructor(){
    super()
    this.ingredientsCounter= 1
    this.state={
      name: '',
      description: '',
      instructions: '',
      proportions: [{
        id: 0,
        ingredients: '',
        quantity: ''
      }]
    }
  }

  handleAddShareholder = () => {

    this.setState({ proportions: this.state.proportions.concat([{ id: this.state.id+1, ingredients: '', quantity: '' }]) });
  }

  handleShareholderNameChange = (index) => (e) => {
    const newProportions = this.state.proportions.map((proportion, proportionIndex) => {
      if (index !== proportionIndex) return proportion;
      return { ...proportion, [e.target.name]: e.target.value };
    });
    this.setState({ proportions: newProportions });
  }

  handleRemoveShareholder = (index) => () => {
    this.setState({ proportions: this.state.proportions.filter((proportion, proportionIndex) => index !== proportionIndex) });
  }

  onChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e)=>{
    e.preventDefault()
  }

  render(){

    return (
      <form onSubmit={e=> {this.onSubmit(e)}}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input name='name' value={this.state.name} type="text" onChange={e=> this.onChange(e)} />

        <p>Description</p>
        <input name='description' value={this.state.description} type="text" onChange={e=> this.onChange(e)} />

        <p>Instructions</p>
        <input name='instructions' value={this.state.instructions} type="text" onChange={e=> this.onChange(e)} />

        <h3>Proportions</h3>
          {this.state.proportions.map((proportion, index) => (
            <div key={proportion.id} className="container">
              <p>Ingredient Name<br/>
              <input name='ingredients' type="text" value={proportion.ingredients} onChange={this.handleShareholderNameChange(index)} />
              </p>

              <p>Quantity<br/>
              <input name='quantity' type="text" value={proportion.quantity} onChange={this.handleShareholderNameChange(index)} />
              </p>
              <button type="button" onClick={this.handleRemoveShareholder(index)} className="small">-</button>
            </div>
        ))}

        <p><button onClick={this.handleAddShareholder}> + </button></p>

        <input type="submit" />
      </form>
    )
  }
}






export default Form
