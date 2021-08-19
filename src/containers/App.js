import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Time from '../components/Time';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        searchRobotsText: state.searchRobots.searchText,
        loading: state.robots.loading,
        robots: state.robots.robots
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        searchRobots: (text) => dispatch({type:'searchRobots/search', payload: text}),
        fetchRobots: () => dispatch({type: 'robots/requestRobots'})
    };
};

class App extends React.Component{

    componentDidMount(){
        this.props.fetchRobots();
    }

    render(){
        const robotsList = this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchRobotsText));
        return (
            <div className="tc">
                <h1 className="robots-title">RoboFriends</h1>
                <SearchBox/>
                <Time/>
                <CardList robots={robotsList}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);