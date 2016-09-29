import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserItem from '../components/UserItem';
import {selectUser} from '../actions/index';

class UserList extends Component
{
    createListItems()
    {
        var self = this;
        return this.props.users.map(function(item){

            return (
                    <div key={item.id} onClick={() => self.props.selectUser(item)}>
                        <UserItem

                            id={item.id}
                            first={item.first}
                            last={item.last}
                            age={item.age}
                            thumbnail={item.thumbnail}
                            description={item.description}

                        />
                    </div>

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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);