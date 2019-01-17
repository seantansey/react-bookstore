import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Cart from './components/Cart'
import CardItems from './components/CardItems'
import Books from './components/Books'
import Admin from './components/Admin'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      allBooks: [],
      cart: [],
      total: [0]
      }
    }

    async componentDidMount() {
      const response = await fetch('http://localhost:8082/api/books')
      const json = await response.json()
      this.setState({ books: json, allBooks: json })
    }

    async addBook(newBook) {
      const response = await fetch('http://localhost:8082/api/books', {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      const json = await response.json()
      this.setState({books: [...this.state.books, json], allBooks: [...this.state.books, json]})
    }

    addToCart = (bookTitle) => {
      let bookToAdd = this.state.books.find(book => book.title == bookTitle)
      this.setState({ cart: [...this.state.cart, bookToAdd], total: [...this.state.total, bookToAdd.price]})
    }

    search = (userInput) => {
      if (userInput.length) {
        let filteredBooks = this.state.books.filter(book => book.title.includes(userInput) || book.author.includes(userInput))
        this.setState({ books: filteredBooks })
      } else {
        let allBooks = this.state.allBooks
        this.setState({ books: allBooks})
      }
    }

    clearSearch = () => {
      let allBooks = this.state.allBooks
      this.setState({ books: allBooks })
    }



  render() {
    return (
      <div className='container bg-light'>
        <Router>
          <div>
            <Nav search={this.search} clearSearch={this.clearSearch}/>
            <br />
            <Route exact path='/' render={()=> <Home />} />
            <Route path='/books' render={()=> <Books books={this.state.books} addToCart={this.addToCart} cart={this.state.cart} total={this.state.total} />}/>
            <Route path='/admin' render={()=> <Admin addBook={this.addBook}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
