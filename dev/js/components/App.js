import React from 'react';
import UserList from '../containers/UserList';
require('../../scss/style.scss');

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2>New redux application</h2>
                <hr/>
                <h3>User details:</h3>
                <UserList/>
            </div>
        );
    }
});