import React from 'react'; 

export function BattleLog(props) {

	// state to keep track of whos turn it is
	const [turn, setTurn] = React.useState(true);
	// array of the 2 pokemon
	const pokemons = props.pokemons
	//set game status to no winner (false)
	const [status, setStatus] = React.useState(false);
	//check if pokemon array defined and set maxHP
	const HP1 = pokemons[0] && pokemons[0].maxHP;
	const HP2 = pokemons[1] && pokemons[1].maxHP;
	//check if pokemon array degined and set each pokemon
	const pokemon1 = pokemons[0] && pokemons[0];
	const pokemon2 = pokemons[1] && pokemons[1];
	//set the variable amount og HP left as a state
	const [HP1Left, setHP1Left] = React.useState();
	const [HP2Left, setHP2Left] = React.useState();
	//keep track of the game log, will use later for history/logging
	const [turnMessage, setTurnMessage] = React.useState('');
	

	//effect loop to stall render to make sure HP state value is set
	React.useEffect(() => {
		//check if state undefined
		if(HP1Left === undefined || HP2Left === undefined) {
			//stay here until set
			setHP1Left(HP1);
			setHP2Left(HP2);
		}
	});

	//just console logging for test purposes
	if(pokemons.length > 0) {
		console.log("Turn of: ", turn ? pokemons[0].name : pokemons[1].name)
		console.log(" ");
	}

	//this function diplays whos turn it is or Game over if status is true
	function who() {
		if (status) {
			return "Game Over!"
		}
		if(pokemons.length > 0) {
			let message = 'Turn: ' + (turn ? pokemons[0].name : pokemons[1].name)
			return message;
		}
		
	}

	//most of the battle logic here
	function handleClick() {
		//if game is over, dont do anything when button is clicked
		if (HP1Left <= 0 || HP2Left <= 0) return;
		
		let message; // game message which will be saved to state
		let pokemon; // current pokemon
		let damage = 0; // damage done
		let move; // variable to record move used (string)
		let total; // total HP after move is done
		let random = Math.floor(Math.random() * 3); //random number to select a move at random
		//will be updated once UI can choose move

		// choose current pokemon based on turns boolean value
		pokemon = turn ? pokemon1 : pokemon2;

		// if pokemon 1 turn
		if(turn) {
			//damage done by move
			damage = pokemon.attacks.special[random].damage;
			//name of move
			move = pokemon.attacks.special[random].name;
			// total HP left
			total = HP2Left-damage;
			//if the total drops below 0, do stuff to end game
			if (total <= 0) {
				//set game state status to true
				setStatus(true);
				//set Pokemon 2s health state to 0
				setHP2Left(0);
				//calculate message
				message = "Game Over! \n " + pokemon.name + " is the winner!";
				//set message state
				setTurnMessage(message);
				//exit out of function
				return;
			// if HP above 0, set HP left
			} else {
				setHP2Left(total);
			}
			
		} else {
			damage = pokemon.attacks.special[random].damage;
			move = pokemon.attacks.special[random].name;
			total = HP1Left-damage;
			if (total <= 0) {
				setStatus(true);
				setHP1Left(0);
				message = "Game Over! \n " + pokemon.name + " is the winner!";
				setTurnMessage(message);
				return;
			} else {
				setHP1Left(total);
			}
			
		}
		
		//message if game not over yet
		message = pokemon.name + " used " + move + " and did " + damage + " damage"
		//change the turn state
		setTurn(!turn);
		//set message state
		setTurnMessage(message);

		
		if (pokemons.length > 0) {
			pokemon = turn ? pokemon1 : pokemon2;
			console.log(pokemon.name + " did damage")
			//setTurn(!turn);
		}
		

	}

	

	return(

		<div className="battle">

			<h1>Battle Log</h1>

			<div className="battle_name">
				<p>{who()}</p>
			</div>

			<button onClick={handleClick}>Do move</button>
			<p>HP1: {HP1Left} / {HP1}</p>
			<p>HP2: {HP2Left} / {HP2}</p>
			<p>{turnMessage ? turnMessage : null}</p>


		</div>
	)
}