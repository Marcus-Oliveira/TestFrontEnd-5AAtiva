import React, { Component } from 'react';
import Card from '../../../components/Card.jsx'
import PropTypes from 'prop-types'

class ListOfCharacters extends Component {

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props);
  }

  renderCharaters(){
    let charactersNodes = this.props.data.map(function(character, index) {
      
      let cardImage = character.thumbnail.path + '.' + character.thumbnail.extension  
      let cardTitle = character.name
      let cardDescription = character.description

      return (
        <div key={index} style={{marginBottom: '31px'}}>
            <Card cardImage={cardImage} cardTitle={cardTitle} cardDescription={cardDescription} />
        </div>        
      )
    })
    return charactersNodes
  }

  render() {
    let charactersList = this.renderCharaters()
    let dataToRender = '';

    if(this.props.searching === true){
      dataToRender = 'LOADING...'
    } else if(this.props.noMatches === true){
      dataToRender = 'No character found'
    }else{
      dataToRender = charactersList
    }

    return (
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        {dataToRender}
      </div> 
    )
  }
}

ListOfCharacters.propTypes = {
  data: PropTypes.array.isRequired
};

export default ListOfCharacters;