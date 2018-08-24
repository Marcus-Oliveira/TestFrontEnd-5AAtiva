import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {

    static defaultProps = {
        cardImage       : 'https://fakeimg.pl/56x56/',
        cardTitle       : 'SpiderMan',
        cardSubtitle    : '',
        cardDescription : 'No description'
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (            
            <div className="card" style={{width: '18rem'}}>
                <img className="align-self-center card-img--circle" src={this.props.cardImage} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <h6 className="card-subtitle mt-4">{this.props.cardSubtitle}</h6>
                    <p className="card-text">{this.props.cardDescription ? this.props.cardDescription : 'No description'}</p>
                </div>
            </div>
         );
    }
}

Card.propTypes = {
    cardImage       : PropTypes.string.isRequired,
    cardTitle       : PropTypes.string.isRequired,
    cardSubtitle    : PropTypes.string.isRequired,
    cardDescription : PropTypes.string.isRequired
};
 
export default Card;