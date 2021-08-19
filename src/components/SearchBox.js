import React from 'react';
import {connect} from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        searchRobots: (text) => dispatch({type:'searchRobots/search', payload: text})
    };
};

class SearchBox extends React.Component{

    searchRobots = (event) => {
        this.props.searchRobots(event.target.value);
    };

    render(){
        return(
            <div className="pa2">
                <input type="search" onChange={this.searchRobots} className="pa3 ba b--green bg-lightest-blue" placeholder="search robots"></input>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps) (SearchBox);