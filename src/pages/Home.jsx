import React, { Component } from 'react'
import SearchBar from './sections/home/SearchBar.jsx'
import ListOfCharacters from './sections/home/ListOfCharacters.jsx'
import ReactPaginate from 'react-paginate';
import md5 from 'md5'
import {urlAPIs} from '../config.js'

class Home extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      data: [],
      offset: 0,
      perPage: 12,

      total: 0,
      orderBy: 'name' // A-Z or -name Z-A 
    }
  }

  loadCharactersFromServer(){
    var publicKey = 'ab23d2daf8aa099290ffea13df22aca0'
    var privateKey = 'f4a90808506c3d9e21dab7a23d720b2136c22861'        
    var ts = new Date().getTime()
    var hash = md5(ts+privateKey+publicKey)
    
    var urlAPI = urlAPIs.marvelAPI + 
        'characters?apikey=' + publicKey + 
        '&ts=' + ts + 
        '&hash=' + hash + 
        '&limit=' + this.state.perPage + 
        '&offset=' + this.state.offset

    fetch(urlAPI, {
      method: 'get'
    })
    .then(response => {
      //Convertendo resposta para json
      return response.json()
    })
    .then(data => {
      //Pegando a resposta tratada
      let result = data.data
      this.setState({
        total: result.total,
        data: result.results,
        pageCount: Math.ceil(result.total / this.state.perPage)
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount(){
    this.loadCharactersFromServer()    
  }

  handlePageClick = (data) => {
    console.log('clicou aqui')
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({offset: offset}, () => {
      this.loadCharactersFromServer();
    });
  };

  render() {
    return (
      <section className="base-section">
        <div className="container base-container">
          <h1 className="title">Character</h1>
          <SearchBar />
          <br /><br />
          <div id="react-paginate">
            <ListOfCharacters data={this.state.data}/>
            <ReactPaginate previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={<a href="">...</a>}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
          </div>
        </div>
      </section>
    )
  }

}

export default Home
