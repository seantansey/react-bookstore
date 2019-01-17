import React from 'react'

class Cart extends React.Component {
  render(){
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item font-weight-bold bg-primary text-light">Cart:</li>
          {this.props.cart.map(book =>
            <li class="list-group-item">
              <div class='font-weight-bold'>{book.title}</div>
              <div class='font-italic'>{book.author}</div>
            </li>)}
            <li class="list-group-item font-weight-bold bg-dark text-light">Total: ${(this.props.total).reduce((acc, cv) => acc + cv).toFixed(2)}</li>
        </ul>
      </div>
    )
  }
}


export default Cart
