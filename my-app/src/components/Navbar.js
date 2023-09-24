import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="buttonContainer">
          <div className="menuItem"><Link to="/all">Összes Pokémon</Link></div>
          <div className="menuItem"><Link to="/search">Pokémon keresése</Link></div>
    </div>
  )
}

export default Navbar