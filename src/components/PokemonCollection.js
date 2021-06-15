import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(props) {
  const pokeCards = props.pokeList.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
