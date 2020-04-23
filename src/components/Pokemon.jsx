import React from 'react'; 

export function Pokemon(props) {

	
	{console.log(props)};

	const pokemon = props.pokemon;
	const [hp, setHp] = React.useState(pokemon.maxHP)
	

	/*
	will use this later if I want battle mode to choose moves
	const battleMode = () => {
		if(props.battleMode)
		{
			return(
				<div>
				<button>Attack</button>
				<p>{hp}/{pokemon.maxHP}</p>
				</div>
			);
		}
	}
	*/

	return(

		<div className="pokemon">
			<div className="pokemon_name" onClick={() => props.handlePokemonClick(pokemon)}>
				<p>{pokemon.name}</p>
			</div>
			<div className="pokemon_meta">
				<span>HP: {pokemon.maxHP}</span>
				<span>CP: {pokemon.maxCP}</span>
			</div>
			<div className="pokemon_image">
				<img src={pokemon.image} alt={pokemon.name} />
			</div>
			<div className="pokemon_attacks">
				{pokemon && 
					pokemon.attacks && 
					pokemon.attacks.special
						.slice(0, 3)
						.map(attack => (
							<span key={`${attack.name}-${attack.damage}`}>
								{attack.name}
							</span>
						))}
			</div>
			
			{/*{battleMode()}*/}
		</div>
	)
}