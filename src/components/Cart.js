import React from 'react'

class Cart extends React.Component {
  render(){
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item font-weight-bold bg-primary text-light">Cart:</li>
          {this.props.cart.map((book, i) =>
            <li key={i} className="list-group-item">
              <div className='font-weight-bold'>{book.title}</div>
              <div className='font-italic'>{book.author}</div>
            </li>)}
            <li className="list-group-item font-weight-bold bg-dark text-light">Total: ${(this.props.total).reduce((acc, cv) => acc + cv).toFixed(2)}</li>
        </ul>
      </div>
    )
  }
}


export default Cart
