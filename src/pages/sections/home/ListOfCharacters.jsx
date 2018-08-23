import React, { Component } from 'react';

class ListOfCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //return (<div>Aqui vem a lista com os carinhas - Fazer foreach do componente Card do Bootstrap</div>);
        return (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className="card" style={{width: '18rem'}}>
                    <img className="align-self-center card-img--circle" src="https://fakeimg.pl/56x56/" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">SpiderMan</h5>
                        <h6 class="card-subtitle mt-4">Peter Paker</h6>
                        <p className="card-text">Descrição do Personagem Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                </div>

                
            </div>
            
        )
    }
}
 
export default ListOfCharacters;