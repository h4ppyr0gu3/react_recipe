import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import AddRecipe from './add_recipe';
import ShoppingList from './shopping_list';
import Edit from './edit';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar">
            <div className="navbar-menu">
                <div className="navbar-start">
                  <div className="navbar-item is-size-1">
                    <Link to={'/'} className="nav-link has-text-black-bis"> recipeApp</Link>
                  </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item is-size-3" ><Link to={'/shopping_list'} className="nav-link has-text-black-bis">ShoppingList</Link></div>
                </div>
            </div>
        </nav>
        <hr/>
         
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/add_recipe' component={AddRecipe} />
              <Route path='/shopping_list' component={ShoppingList} />
              <Route path='/edit/:key' component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;