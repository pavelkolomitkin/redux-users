import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from '../components/User';

class UserList extends Component
{
    createListItems()
    {
        return this.props.users.map(function(item){
            return (
                <User key={item.id}
                    id={item.id}
                    first={item.first}
                    last={item.last}
                    age={item.age}
                    thumbnail={item.thumbnail}
                    description={item.description}
                />
            );
        });
    }

    render() {
        return (
            <div>
                {this.createListItems()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);