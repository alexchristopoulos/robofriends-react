import React from 'react';

class Card extends React.Component{

    render(){
        return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" onClick={this.clickFunc}>
                <img alt="robots" src={`https://robohash.org/${this.props.id}?200x200`}></img>
                <div>
                    <h2>
                        {this.props.name} 
                    </h2>
                    <h2>
                    {this.props.surname}
                    </h2>
                    <p>
                        {this.props.email}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;