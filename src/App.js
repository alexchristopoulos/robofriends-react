import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Time from './Time';
import { robots } from './robots';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        
    }

    render(){
        const robotsList = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField));
        return (
            <div className="tc">
                <h1 className="robots-title">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Time/>
                <CardList robots={robotsList}/>
            </div>
        );
    }
}

export default App;