import React from 'react';
import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';
require('../../scss/style.scss');

export default React.createClass({
    render: function () {

        return (
            <div>
                <UserList/>
                <hr/>
                <h3>User details:</h3>
                <UserDetails/>
            </div>
        );
    }
});