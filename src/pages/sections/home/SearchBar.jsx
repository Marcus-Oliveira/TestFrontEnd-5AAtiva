import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            searchValue: '',
            orderBy: 'name', // or -name
            imgOrderBy: '/img/arrow-down.svg',
            filterLabel: 'A-Z'
         }
    }

    onChangeHandler(event){
        event.preventDefault();
        this.props.changeSearchValue(event.target.value)
    }

    searchCharacter(event){
        event.preventDefault();
        //this.props.changeSearchValue(this.state.searchValue)
    }

    changeOrderBy(event){
        event.preventDefault();
        let arrowDirection = 'down'
        let orderBy = ''
        let filterLabel = ''

        if(this.state.orderBy == 'name'){
            arrowDirection = 'up'
            orderBy = '-name'
            filterLabel = 'Z-A'
        }else{
            arrowDirection = 'down'
            orderBy = 'name'
            filterLabel = 'A-Z'
        }
        
        this.setState({
            imgOrderBy: '/img/arrow-'+arrowDirection+'.svg',
            orderBy: orderBy,
            filterLabel: filterLabel
        })

        //Chamando a função changeOrderBy da Home
        //Para assim alterar o state lá e recarregar a lista
        this.props.changeOrderBy()        
    }

    render() { 
        const state = this.state

        return (
            <nav className="search-bar">
                <form className="form-inline">
                    <input className="input input--search" type="search" placeholder="Characters" onChange={this.onChangeHandler.bind(this)} />
                    <div onClick={this.changeOrderBy.bind(this)} style={{cursor: 'pointer'}}>
                        <button className="btn btn--search" type="button"><img src="/img/filter.svg" /></button>
                        <span className="filter-order-by">{state.filterLabel}</span>
                        <button className="btn btn--filters" type="button"><img src={state.imgOrderBy} /></button>                    
                    </div>
                </form>
            </nav>
        );
    }
}
 
export default SearchBar;