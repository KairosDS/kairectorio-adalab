import React from 'react';

class Search extends React.Component{
  render(){
    const {handleSearchInput} = this.props;
    return(
      <div className="search__container">
        <label htmlFor="search" className="search__label"><i className="fas fa-search"></i> </label>
        <input className="search__input" type="text" name="search" id="search" placeholder="Introduce tu búsqueda" title="Introduce tu búsqueda" onChange={handleSearchInput} />
      </div>
    );
  }
}

export default Search;
