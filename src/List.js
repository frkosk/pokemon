import React, {Component } from 'react';
import Loader from './Loader';

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: this.props.activeItem,
    };
    this.getPokemonDetail = this.getPokemonDetail.bind(this)
  }

  getPokemonDetail(URL, i) {
    this.props.getPokemonDetail(URL);
    this.setState({activeItem: i+1});
  }

  render() {
    let pokemons = this.props.pokemons;
    let page;

    if ( pokemons.length ) {
      page = <ul id="pokemonList">
        {pokemons.map((pokemon, i) =>
          <li key={i+1}
              onClick={() => this.getPokemonDetail(pokemon.url, i)}
              className={"btn" + (this.state.activeItem === i+1 ? ' active' : '')}
          >{pokemon.name}</li>
        )}
      </ul>;
    } else {
      page = <Loader loaderStyle={'loader--dark'}/>;
    }

    return (
      <div>
      {page}
      </div>
    );
  }

}

export default List;