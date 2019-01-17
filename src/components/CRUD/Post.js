import React from 'react'

class Post extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     newBook: {
  //       title: ,
  //       subTitle: ,
  //       author: ,
  //       published: ,
  //       publisher: ,
  //       pages: ,
  //       description: ,
  //       website: ,
  //       inCart: false,
  //       price: ,
  //       id:
  //     }
  //   }
  // }

  // onSubmit = () => {
  //   console.log(this.state.newBook)
  //   //this.props.addBook()
  // }

  render() {
    return (
      <form className="border border-primary p-3 rounded" onSubmit={this.onSubmit} >
        <h2>Add New Book</h2>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="subTitle">Subtitle</label>
          <input type="text" class="form-control" id="subTitle" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input type="text" class="form-control" id="author" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="published">Date Published</label>
          <input type="text" class="form-control" id="published" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="publisher">Publisher</label>
          <input type="text" class="form-control" id="publisher" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="pages">Pages</label>
          <input  type="number" class="form-control" id="pages" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="website">Website</label>
          <input type="text" class="form-control" id="website" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" rows="1"></input>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input  type="number" class="form-control" id="price" rows="1"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default Post
