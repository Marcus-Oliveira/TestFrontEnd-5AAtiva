import React, { Component } from 'react'
import { Route } from "react-router-dom"

class Default extends Component {

  constructor(){
    super()
  }

  render() {
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={matchProps => (
      <div>
        <Component {...matchProps} />
      </div>
    )} />
  }

}

export default Default