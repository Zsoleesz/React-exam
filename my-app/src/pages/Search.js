import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import PokemonList from  "../components/PokemonListImg";
import "../styles/Search.css";

const Search = () => {

    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState("");


    const searchedPokemon = pokemon.filter((p)=> {
        return p.name.toLowerCase().includes(search.toLowerCase())

    })



    useEffect(() => {
        let cancel;
        Axios.get("https://pokeapi.co/api/v2/pokemon/", {
            cancelToken: new Axios.CancelToken(c => cancel = c)
        })
          .then(res=>{ 
            setPokemon(res.data.results)

          })
          return () => cancel();
      }, []);

    

  return (
    <div>
        <div className="pokemonHeader">
            <h1>Pokémon kereső</h1>
            <input type="text" placeholder="Keress rá kedvenc pokémonodra..." onChange={(e) => {
                setSearch(e.target.value);
            }} />
        </div>

        <div className="pokemonContainer">
            {searchedPokemon.map((p) =>  {                
                return <PokemonList 
                        name ={p.name}
                        itemurl = {p.url}
                        />
            })}
        </div>

    </div>
  )
}

export default Search