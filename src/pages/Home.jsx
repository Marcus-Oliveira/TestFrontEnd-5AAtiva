import React, { Component } from 'react'
import SearchBar from './sections/home/SearchBar.jsx'
import ListOfCharacters from './sections/home/ListOfCharacters.jsx'
import ReactPaginate from 'react-paginate';
import md5 from 'md5'
import {urlAPIs, publicKey, privateKey} from '../config.js'

class Home extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      data: [],
      offset: 0,
      perPage: 12,
      total: 0,
      orderBy: 'name', // 'name' = A-Z or '-name' = Z-A ,
      searchValue: '',
      searching: true,
      noMatches: true
    }
  }

  //Carregando os personagens via marvel api
  loadCharactersFromServer(){
    
    //NEXT STEPS
    //Colocar algum loading da vida
    //E um animate do jquery para voltar ao topo
    //ao carregar os personagens

    let ts = new Date().getTime()
    let hash = md5(ts+privateKey+publicKey)
    
    let urlAPI = urlAPIs.marvelAPI + 
        'characters?apikey=' + publicKey + 
        '&ts=' + ts + 
        '&hash=' + hash + 
        '&limit=' + this.state.perPage + 
        '&offset=' + this.state.offset + 
        '&orderBy=' + this.state.orderBy
    
    if(this.state.searchValue.length > 0){
      urlAPI += '&nameStartsWith=' + this.state.searchValue
    }

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
      
      if(result.count>0){
        this.setState({
          total: result.total,
          data: result.results,
          pageCount: Math.ceil(result.total / this.state.perPage),
          searching: false,
          noMatches: false
        })
      }else{
        this.setState({
          searching: false,
          noMatches: true
        })
      }

    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount(){
    this.loadCharactersFromServer()    
  }

  handlePageClick = (data) => {
    //Definindo o offset de acordo 
    //com a páginação selecionada * quantidade de itens por página
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({offset: offset}, () => {
      this.loadCharactersFromServer();
    });
  };

  changeOrderBy(){
    let orderBy = 'name'
    if(this.state.orderBy == 'name'){
      orderBy = '-name'
    }else{
      orderBy = 'name'
    }
    
    this.setState({orderBy: orderBy, searching: true}, () => {
      this.loadCharactersFromServer();
    });
  }

  changeSearchValue(searchValue){
    this.setState({searchValue: searchValue, searching: true}, () => {
      this.loadCharactersFromServer();
    });
  }

  render() {
    return (
      <section className="base-section">
        <div className="container base-container">
          <h1 className="title">Character</h1>
          <SearchBar changeOrderBy={this.changeOrderBy.bind(this)} changeSearchValue={this.changeSearchValue.bind(this)} />
          <br /><br />
          <div id="react-paginate">
            <ListOfCharacters data={this.state.data} searching={this.state.searching} noMatches={this.state.noMatches} />
            <ReactPaginate previousLabel={<img src="/img/arrow-left.svg" />}
                        nextLabel={<img src="/img/arrow-right.svg" />}
                        previousClassName={"arrows"}
                        nextClassName={"arrows"}
                        breakLabel={<a href="#">de</a>}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={0}
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
