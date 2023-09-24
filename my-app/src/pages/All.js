import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import PokemonList from  "../components/PokemonList";
import "../styles/All.css";

const All = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        let cancel;
        Axios.get("https://pokeapi.co/api/v2/pokemon", {
            cancelToken: new Axios.CancelToken(c => cancel = c)
        })
          .then(res=>{ 
            setPokemon(res.data.results)
          })
          return () => cancel();
      }, []);

  return (
    <div className="pokemonAll">
        <h1>Összes Pokémon</h1>
        {pokemon.map((p) =>  {
            return <PokemonList 
                    name ={p.name}
                    url = {p.url}
                    />
        })}
            
    </div>
  )
}

export default All