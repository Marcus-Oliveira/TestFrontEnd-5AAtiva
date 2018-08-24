import React, { Component } from 'react';

class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container">
                <br />
                <h1>:( Que pena</h1>
                <h4>Parece que vc entrou na página errada</h4>
                <h5>Quer uma mãozinha? <a href="/">clique aqui</a></h5>

            </div>
        );
    }
}
 
export default ErrorPage;