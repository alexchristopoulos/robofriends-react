import React from 'react';

class SearchBox extends React.Component{

    render(){
        return(
            <div className="pa2">
                <input type="search" onChange={this.props.searchChange} className="pa3 ba b--green bg-lightest-blue" placeholder="search robots"></input>
            </div>
        );
    }
}

export default SearchBox;