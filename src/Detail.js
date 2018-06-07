import React, { Component } from 'react';
import Loader from './Loader';

class Detail extends Component {

  render() {
    let pokemonDetail = this.props.pokemonDetail;
    let pokemonDetailLoading = this.props.pokemonDetailLoading;
    let page;

    //name, sprites.front_default
    if ( pokemonDetailLoading ) {
      page = <Loader />
    } else {
      page = <p>Click one of the buttons</p>
    }
    if ( Object.keys(pokemonDetail).length !== 0 ) {
      page = <div><h1>{pokemonDetail.name}</h1><div className="img--shadow"><img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name}/></div></div>;
    }

    return (
      <div id="pokemonDetail">
      {page}
      </div>
    );
  }

}

export default Detail;