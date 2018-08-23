import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (            
            <div className="card" style={{width: '18rem'}}>
                <img className="align-self-center card-img--circle" src="https://fakeimg.pl/56x56/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">SpiderMan</h5>
                    <h6 className="card-subtitle mt-4">Peter Paker</h6>
                    <p className="card-text">Descrição do Personagem Lorem ipsum dolor sit amet, consectetur </p>
                </div>
            </div>
         );
    }
}
 
export default Card;