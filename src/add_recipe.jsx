import React, { Component } from 'react';
import postData from './comms';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'ingredients': {},
      'quantity': '',
      'title': '',
      'directions': '',
      'unit': '',
      'ingredient': ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  handleAdd(){
    var float = parseFloat(this.state.quantity).toFixed(2);
    var uAndQ = float.toString() + " " + this.state.unit;
    console.log(uAndQ);
    var data = this.state.ingredients
    data[this.state.ingredient] = uAndQ
    this.setState({'ingredients': data})
  }

  handleDelete(key, e){
    var obj = this.state.ingredients;
    var data = {};
    for (var keys in obj) {
      if (keys === key) {
        continue;
      } else {
        data[keys] = obj[keys]
      }
    }
    this.setState({'ingredients': data})
  }

  handleSubmit(){
    if (this.state.title !== "") {
      var data = {}
      data[this.state.title] = {}
      data[this.state.title]["recipe"] = this.state.directions.split("\n");
      var obj = this.state.ingredients
      for ( var key in obj ) {
        data[this.state.title][key] = obj[key];
      }
      console.log(data)
      postData('http://localhost:3001/add_recipe', data, "POST")
    }
    window.location.href = '/'
  }

  render() {
    var obj = this.state.ingredients
    // var recipe;
    var insert = [];
    for (var key in obj) {
      if ( key === 'recipe' ) {
        var directions = obj[key]
        directions = directions.join("\n");
      } else {
        var ingredients = key
          var quantity = obj[key]
          var holder = (
            <div class="columns">
              <div class="column">
                 <p>{ingredients}</p>
              </div>
              <div className="column">
                <p>{quantity}</p>
              </div>
              <div class="column">
                  <div class="field">
                      <div class="control">
                          <button class="button is-danger" onClick={this.handleDelete.bind(this, key)}>
                          Delete
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          )
          insert.push(holder);
        }
      }
    return (
         <>
        <div className="columns">
          <div className="column">
            <p className="is-size-3">New Recipe</p>
          </div>
        </div>  

      <div class="columns">
        <div class="column">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" name="title" onChange={this.onChange}/>
                </div>
            </div>
        </div>
        
    </div>
    <div class="field">
        <label class="label">Directions</label>
        <div class="control">
            <textarea class="textarea" name="directions" onChange={this.onChange}>
            </textarea>
        </div>
    </div>
    {insert}
    <div class="columns">
              <div class="column">
                  <div class="field">
                      <div class="control">
                          <input class="input" type="text" placeholder="Ingredient" name="ingredient" onChange={this.onChange}/>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="field">
                      <div class="control">
                          <input class="input" type="text" placeholder="Quantity" name="quantity" onChange={this.onChange}/>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="field">
                      <div class="control">
                          <input class="input" type="text" placeholder="Unit" name="unit" onChange={this.onChange}/>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="field">
                      <div class="control">
                          <button class="button is-primary" onClick={this.handleAdd}>
                          Add
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <button type="submit" class="button is-link" onClick={this.handleSubmit}>Save Changes</button>

        </>
    );
  }
}

export default AddRecipe;