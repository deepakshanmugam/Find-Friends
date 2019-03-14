import React,{Component} from 'react';
import FriendList from './FriendList';
import {friends} from './friends';
import SearchBox from './SearchBox';

class App extends Component{
	constructor()
	{
		super()
		this.state = 
		{
			friends:friends,
			searchfield:'' 
		}
	}
	onsearch= (event) => 
	{
		this.setState({searchfield: event.target.value})
	}
	render()
	{
		const filterfriends=this.state.friends.filter(friends=> 
		{
			return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		}
		)
		if(this.state.friends.length === 0)
		{
			return <h1>Loading </h1>
		}
		else
		{
			return (
			<div className='tc'>
			<h1 >findfriends</h1>
			<SearchBox searchchange={this.onsearch}/>
			<FriendList friends={filterfriends}/>
			</div>
			);
		}
	}
}
export default App;