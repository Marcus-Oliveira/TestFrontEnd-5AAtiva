import React, { Component } from 'react'
import { Route } from "react-router-dom"

//Components da estrutura do layout
//Header, Footer
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

class Default extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={matchProps => (
      <div>
        <Header/>
        <Component {...matchProps} />
        <Footer />
      </div>
    )} />
  }

}


export default Default
