import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon.jsx';

export function PokemonsContainer() {

	{/*this is the gql query as part of a hook
	//first get the data as an array called pokemons
	//and then get the query from the schema
	//its basically a state*/}

	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 9 },
	});

	const [choices, setChoices] = React.useState(0);
	const [pokemonChoices, setPokemons] = React.useState([]);
	
	React.useEffect(() => {
		console.log("Choices",choices)
  		console.log("Pokemon Choice". pokemonChoices && pokemonChoices[choices])
	});
    
    function handlePokemonClick(pokemon) {
    	if (pokemonChoices.length >= 2)
    	{
    		console.log('choices has reached max');
    		console.log(pokemonChoices);
    		return;
    	}
  		setPokemons(prevArray => [...prevArray, pokemon]);
  		setChoices(choices + 1);
  		
  	}
	

	return (
		<div className="container">
			{/*/useQuery is  a hook 
			//hooks are functions that work in the background
			//&& does the second map argument is first is truthy*/}
			{pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} handlePokemonClick={() => handlePokemonClick(pokemon)}/>)}
		</div>
	);
}

