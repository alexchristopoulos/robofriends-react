import React from 'react';

class Time extends React.Component{

    constructor(props){
        super();
        this.state = {
            interval: setInterval(()=>{
                
                this.setState({
                    time: new Date().toLocaleTimeString()
                })
            } ,1000),
            time: new Date().toLocaleTimeString()
        };
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    render(){
        return (
            <p className="time">{this.state.time}</p>
        );
    }
}

export default Time;