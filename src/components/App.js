import React, { Component } from 'react'
import '../App.css'
import Header from './header'

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    const url = 'http://localhost:3001/categories'
    fetch(url, { headers: { 'Authorization': '12345' }})
      .then(res => res.json())
      .then(({ categories }) => categories.map(({ name }) => name ))
      .then((category) => this.setState({
        categories: category
      }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header/>
        <ul>
          {this.state.categories.map(category =>
          <li>{category}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;
