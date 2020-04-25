import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon.jsx';
import { BattleLog } from '../components/BattleLog.jsx';

export function BattleContainer(props) {

	{/*this is the gql query as part of a hook
	//first get the data as an array called pokemons
	//and then get the query from the schema
	//its basically a state*/}

	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 2 },
	});

	function handlePokemonClick(pokemon) {
    	console.log("Do nothing");
  		
  	}



	return (
		<div>
			<div className="container">
			<div id="battle_background">
				<h1 id="Battle">Battle</h1>
			</div>
			</div>
		
				<div className="container">

					{pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} 
																  pokemon={pokemon} 
																  handlePokemonClick={() => handlePokemonClick(pokemon)}
																  battleMode={true} />)}
				</div>
				<div className="container">
					<BattleLog pokemons={pokemons}/>
				</div>
		</div>
	);
}
