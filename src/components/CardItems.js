import React from 'react'
import Card from './Card'


class CardItems extends React.Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => <Card info={book} addToCart={this.props.addToCart}/>)}
      </div>
    )
  }
}

export default CardItems
