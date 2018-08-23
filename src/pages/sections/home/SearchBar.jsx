import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue: '',
            orderBy: 'ascending', // or descending
            imgOrderBy: '/img/arrow-down.svg',
            filterLabel: 'A-Z'
         }
    }

    onChangeHandler(event){
        event.preventDefault();
        this.setState({
            searchValue: event.target.value
        })
    }

    searchCharacter(event){
        event.preventDefault();
        console.log(this.state.searchValue)
    }

    changeOrderBy(event){
        event.preventDefault();
        let arrowDirection = 'down'
        let orderBy = ''
        let filterLabel = ''

        if(this.state.orderBy == 'ascending'){
            arrowDirection = 'up'
            orderBy = 'descending'
            filterLabel = 'Z-A'
        }else{
            arrowDirection = 'down'
            orderBy = 'ascending'
            filterLabel = 'A-Z'
        }
        
        this.setState({
            imgOrderBy: '/img/arrow-'+arrowDirection+'.svg',
            orderBy: orderBy,
            filterLabel: filterLabel
        })
        
    }

    render() { 
        const state = this.state

        return (
            <nav className="search-bar">
                <form className="form-inline">
                    <input className="input input--search" type="search" placeholder="Characters" onChange={this.onChangeHandler.bind(this)} />
                    <button className="btn btn--search" type="button" onClick={this.searchCharacter.bind(this)}><img src="/img/filter.svg" /></button>
                    <span className="filter-order-by">{state.filterLabel}</span>
                    <button className="btn btn--filters" type="button" onClick={this.changeOrderBy.bind(this)}><img src={state.imgOrderBy} /></button>                    
                </form>
            </nav>
        );
    }
}
 
export default SearchBar;