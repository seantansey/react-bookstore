import React from 'react'

class Card extends React.Component {

  click = (bookName) => {
    this.props.addToCart(bookName)
  }

  render() {
    return (
      <div class="card mb-2">
        <div class="card-body">
          <h5 class="card-title">{this.props.info.title}</h5>
          <h6 class="card-title font-italic">{this.props.info.author}</h6>
          <p class="card-text"><span><a href={this.props.info.website}>{this.props.info.website}</a></span></p>
          <button type='button' class="btn btn-primary" value={this.props.info.title} onClick={(e) => this.click(e.target.value)} >Add to cart</button>
          <button type='button' class="btn btn-secondary ml-2">Details</button>
        </div>
      </div>
    )
  }
}

export default Card
