import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks"; //4.1K (gzipped: 1.7K)
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PokemonsContainer } from './containers/PokemonsContainer';
import { BattleContainer } from './containers/BattleContainer';
import { AboutContainer } from './containers/AboutContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  
  

    const client = new ApolloClient({
      uri: 'https://graphql-pokemon.now.sh'
    });

    const [choices, setChoices] = React.useState([]);

    //pass choices as a prop ro battle containter
    //if empty, have battle container choose two pokemon at random

  	

    return (
    	<Router>
		    <ApolloProvider client={client}>

		    	<Navbar className="custom-nav" variant="light" fixed="top">
			    	<Navbar.Brand href="/">Pokemon Battler</Navbar.Brand>
			    	<Nav.Link href="/battle">Battle</Nav.Link>
			    	<Nav.Link href="/about">About</Nav.Link>
			    </Navbar>
			    	
		    	<div style={{paddingTop: "50px"}}>
		    	</div>
		      	
		      	<Switch>
		      		<Route path="/about">
		      			<AboutContainer />
		      		</Route>
		      		<Route path="/battle">
		      			<BattleContainer choices={choices} />
		      		</Route>
		      		<Route path="/">
		        		<PokemonsContainer />
		        	</Route>
		        </Switch>
		      
		    </ApolloProvider>
		</Router>
    );
}

export default App;
