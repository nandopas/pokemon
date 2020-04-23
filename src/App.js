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
import './App.css';

function App() {
  
  

    const client = new ApolloClient({
      uri: 'https://graphql-pokemon.now.sh'
    });

  	

    return (
    	<Router>
		    <ApolloProvider client={client}>
		    	<ul>
		    		<li>
		    			<Link to="/"> Home </Link>
		    		</li>
		    		<li>
		    			<Link to="/battle"> Battle </Link>
		    		</li>
		    	</ul>
		      	
		      	<Switch>
		      		<Route path="/battle">
		      			<BattleContainer />
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
