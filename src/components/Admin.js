import React from 'react'
import '../index.css';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <p>This page allow for the following functionality add a book, modify a book, research a book, and delete a book from the database</p>
        <ul class="list-group">
          <li class="list-group-item"><button type="button" class="btn btn-primary fixedWidth mr-5">Add </button>Add a new book to the database to be displayed on the books page</li>
          <li class="list-group-item"><button type="button" class="btn btn-primary fixedWidth mr-5">Modify</button>Modify the data related to particular book within the database</li>
          <li class="list-group-item"><button type="button" class="btn btn-primary fixedWidth mr-5">Research</button>Pull all data related to a particular book from the database</li>
          <li class="list-group-item"><button type="button" class="btn btn-primary fixedWidth mr-5">Delete</button>Delete a book from the database</li>
        </ul>
      </div>
    )
  }
}

export default Admin
