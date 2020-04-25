import React from 'react';

export function AboutContainer() {

	return (
		<div className="container">
			<h1>About</h1>
			<h3>Go to the battle screen to have 2 pokemon of your choice face off in a battle</h3>
			<p>So I was watching a tutorial while learning React for rendering a database of pokemon in React. 
			   I wanted to take the tutorial a step further and add pokemon battles</p> 
			<p>I used React hooks and functional components to make the Battle Log so the settings of the game would be kept as state variables
			   to allow update messages to be rendered in the DOM without having to rerender the whole webpage</p> 
			<p>I still need to implement allowing the user to choose the pokemon rather than just picking the first two </p> 
			<p>This is more or less an excercise in learning how React functional components/hooks work. Also wanted an excuse to try GraphQL</p>
			
			<p>Credit to Karl Hadwen for initial tutorial on GraphQL queries and how to use React to build components from a GraphQL API</p>

			<a href="https://www.youtube.com/watch?v=yKFoAF7J0mc&t=2s">Youtube tutorial found at this link</a>
		</div>

	)

}