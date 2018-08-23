import React, { Component } from 'react'
import SearchBar from './sections/home/SearchBar.jsx'
import ListOfCharacters from './sections/home/ListOfCharacters.jsx'

class Home extends Component {

  render() {
    return (
      <section className="base-section">
        <div className="container base-container">
          <h1 className="title">Character</h1>
          <SearchBar />
          <br /><br />
          <ListOfCharacters />
        </div>
      </section>
    )
  }

}

export default Home
