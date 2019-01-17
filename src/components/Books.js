import React from 'react'
import CardItems from './CardItems'
import Cart from './Cart'

class Books extends React.Component {
  render () {
    return (
      <div>
        <h1>Books:</h1>
        <div class='row'>
          <div class='col-sm-8'>
            <CardItems books={this.props.books} addToCart={this.props.addToCart}/>
          </div>
          <div class='col-sm-4'>
            <Cart cart={this.props.cart} total={this.props.total}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Books
