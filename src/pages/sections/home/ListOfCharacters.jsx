import React, { Component } from 'react';
import Card from '../../../components/Card.jsx'
import PropTypes from 'prop-types'

class ListOfCharacters extends Component {

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderCharaters(){
    let charactersNodes = this.props.data.map(function(character, index) {
      
      let cardImage = character.thumbnail.path + '.' + character.thumbnail.extension  
      let cardTitle = character.name
      let cardDescription = character.description

      return (
        <div key={index}>
            <Card cardImage={cardImage} cardTitle={cardTitle} cardDescription={cardDescription} />
        </div>        
      )
    })
    return charactersNodes
  }

  render() {
    let characters = this.renderCharaters()
    return (
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {characters}
      </div> 
    )
  }
}

ListOfCharacters.propTypes = {
  data: PropTypes.array.isRequired
};

export default ListOfCharacters;