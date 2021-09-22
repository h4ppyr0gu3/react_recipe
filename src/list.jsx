import React, { Component } from 'react';

class List extends Component {
  render() {
    var ingredients = this.props.ingredients;
    if (ingredients.length > 1) {
        ingredients = ingredients.join("\n"); }
    return (
      <>
        <div className="card-header">
          <h1 className="title p-5">{this.props.recipe}</h1>
        </div>
        <div className="card-content">
          <p>{this.props.description}</p>
          <br></br>
          <h2 className="subtitle">Ingredients</h2>
          <pre>{ingredients}</pre>
        </div>
      </>
    );
  }
}

export default List;