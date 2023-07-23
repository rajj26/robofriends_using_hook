import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import { robots } from './Robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {
	// constructor() {
	// 	super()
	// 	this.state= { 
	// 	robots: [],
	// 	searchfield: ''
	//    }
	// }

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response =>  response.json())
	// 	.then(users => this.setState({robots: users}));
		
		
	// }

	const [ robots, setRobots ] = useState([]);
	const [ searchfield, setSearchfield ] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(users => {setRobots(users)});
	}, [])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

	
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	if (robots.length === 0) {
		return <h1>Loading</h1>
	} else {
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				<ErrorBoundry>
				<CardList robots={filteredRobots}/>
				</ErrorBoundry>
				</Scroll>
			</div>

);
	}



}




export default App;