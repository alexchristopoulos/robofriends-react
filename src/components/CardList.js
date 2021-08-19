import React from 'react';
import Card from './Card';

class CardList extends React.Component {

    render() {
        return <div>
            {
                this.props.robots.map((user, i) => {
                    return <Card key={i} id={user.id} name={user.name} email={user.email} surname={user.username} />
                })
            }
        </div>
    }
}

export default CardList;