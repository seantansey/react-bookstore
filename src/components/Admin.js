import React from 'react'
import '../index.css';
import Post from './CRUD/Post'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Admin extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <h1>Admin Page</h1>
            <p>This page allow for the following functionality add a book, modify a book, research a book, and delete a book from the database</p>
            <ul className="list-group">
              <li className="list-group-item"><Link to='/admin/post'>Add a new book to the database to be displayed on the books page</Link></li>
              <li className="list-group-item"><button type="button" className="btn btn-primary fixedWidth mr-5">Modify</button>Modify the data related to particular book within the database</li>
              <li className="list-group-item"><button type="button" className="btn btn-primary fixedWidth mr-5">Research</button>Pull all data related to a particular book from the database</li>
              <li className="list-group-item"><button type="button" className="btn btn-primary fixedWidth mr-5">Delete</button>Delete a book from the database</li>
            </ul>
            <br/>
            <Route path='/admin/post' render={()=> <Post addBook={this.props.addBook}/>} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Admin
