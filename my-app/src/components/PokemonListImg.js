import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const PokemonListImg = ({name, itemurl}) => {

    const [pokemonUrl, setPokemonUrl] = useState("");
    
    useEffect(() => {

        Axios.get(itemurl)
          .then(res=>{ 
            setPokemonUrl(res.data.sprites.front_default)
          })

    }, [itemurl])

  return (
    
    <div className="pokemonItem">
         <div>{name}</div>
         <img src={pokemonUrl} title={pokemonUrl}></img>
    </div>
  )
}

export default PokemonListImg