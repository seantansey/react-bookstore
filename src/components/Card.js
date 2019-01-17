import React from 'react'

class Card extends React.Component {

  click = (bookName) => {
    this.props.addToCart(bookName)
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{this.props.info.title}</h5>
          <h6 className="card-title font-italic">{this.props.info.author}</h6>
          <p className="card-text"><span><a href={this.props.info.website}>{this.props.info.website}</a></span></p>
          <button type='button' className="btn btn-primary" value={this.props.info.title} onClick={(e) => this.click(e.target.value)} >Add to cart</button>
        </div>
      </div>
    )
  }
}

export default Card
