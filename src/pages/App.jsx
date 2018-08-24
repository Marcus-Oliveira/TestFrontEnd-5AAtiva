import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

//Páginas para as rotas
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'

//Configurando rotas com layouts diferentes
import DefaultLayout from '../routers/DefaultLayout.jsx'

class App extends Component {

  constructor(){
    super()
  }

  componentDidMount(){
    //removendo loading inicial da aplicação
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
  }

  render() {
    return (
      <Router>        
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>        
      </Router>
    )
  }

}

export default App
