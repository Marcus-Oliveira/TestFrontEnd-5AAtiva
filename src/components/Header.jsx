import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header className="base-header">
                <img src="/img/marvelLogo.svg.png" className="img-fluid marvel-logo float-left" />
            </header>
        );
    }
}
 
export default Header;