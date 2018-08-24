import React, { Component } from 'react'
//Router = roteador em si
//Route = uma rota da aplicação
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

//Páginas para as rotas
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'

//Configurando rotas com layouts diferentes
import BlankLayout from '../routers/BlankLayout.jsx'
import DefaultLayout from '../routers/DefaultLayout.jsx'

class App extends Component {

  constructor(){
    super()
  }

  componentDidMount(){
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
        <div>
          <Switch>
            <DefaultLayout exact path="/" component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
