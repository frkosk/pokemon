import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import List from './List';
import Detail from './Detail';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      pokemonDetail: [],
      pokemonDetailLoading: false,
      limit: 10,
      offset: 1,
      activeItem: 0
    };

    this.getPokemons = this.getPokemons.bind(this);
    this.getPokemonDetail = this.getPokemonDetail.bind(this);
  }

  componentWillMount() {
    this.getPokemons();
  }

  getPokemons() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`)
    .then(res => {
      const pokemons = res.data.results.map(obj => obj);
      this.setState({pokemons});
    })
    .catch( (error) => console.log(error) );
  }

  getPokemonDetail(URL) {
    this.setState({pokemonDetailLoading: true});
      this.setState({pokemonDetail: []});

    axios.get(URL)
    .then((res) => {
      this.setState({pokemonDetail: res.data});
      this.setState({pokemonDetailLoading: false});
    })
    .catch( error => console.log(error) );
  }

  render() {
    return (
      <div className="app">
        <Detail
          pokemonDetail={this.state.pokemonDetail}
          pokemonDetailLoading={this.state.pokemonDetailLoading} />
        <List
          pokemons={this.state.pokemons}
          getPokemonDetail={this.getPokemonDetail}
          activeItem={this.state.activeItem} />
      </div>
    );
  }
}

export default App;