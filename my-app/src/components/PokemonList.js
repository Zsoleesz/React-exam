import React from 'react'

const PokemonList = ({name, url}) => {


  return (
    <div className="pokemonItem">
         <div>{name}</div>
         <a href={url}>{url}</a>
    </div>
  )
}

export default PokemonList