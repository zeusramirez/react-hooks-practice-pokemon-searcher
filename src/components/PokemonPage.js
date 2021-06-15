import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleTermChange = (e) =>{
    setSearchTerm(e.target.value)
  }

  const addToPokeList = (pokeObj) => {
    let newArr = [ ...pokeList]
    newArr.push(pokeObj)
    setPokeList(newArr)
  }


  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokeList(data))
  }, []);

  const filteredList = pokeList.filter(pokemon => pokemon.name.includes(searchTerm));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addToPokeList={addToPokeList}/>
      <br />
      <Search searchTerm={searchTerm} handleTermChange={handleTermChange}/>
      <br />
      <PokemonCollection pokeList={filteredList} />
    </Container>
  );
}

export default PokemonPage;
