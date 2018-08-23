import React, { Component } from 'react';
import Card from '../../../components/Card.jsx'

class ListOfCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                <Card />
                <Card />
            </div>           
        )
    }
}
 
export default ListOfCharacters;