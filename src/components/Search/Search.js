import React from 'react';

class Search extends React.Component{
  render(){
    const {handleSearchInput} = this.props;
    return(
      <div className="search__container">
        <label htmlFor="search" className="search__label">Introduce tu búsqueda</label>
        <input className="search__input" type="text" name="search" id="search" placeholder="Inserta tu búsqueda aquí" onChange={handleSearchInput} />
      </div>
    );
  }
}

export default Search;