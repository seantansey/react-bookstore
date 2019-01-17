import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
  }

  onChange = () => {
    this.props.search(this.state.searchString)
  }

  onClick = () => {
    this.props.clearSearch()
    let inputBox = document.getElementById('input')
    inputBox.value = ''
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/'className="navbar-brand">Books n' Shizzz</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to='/books'className="nav-link">Books<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to='/admin' className="nav-link">Admin</Link>
            </li>
          </ul>

          <form onChange={this.onChange} className="form-inline my-2 my-lg-0">
            <input id='input' className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => this.setState({ searchString: e.target.value})} />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.onClick}>Clear</button>
          </form>
        </div>
      </nav>
    )
}
}

export default Nav
