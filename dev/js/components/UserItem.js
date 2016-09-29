import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div>
                <a href="#{this.props.id}">{this.props.first} {this.props.last}</a><span>({this.props.age})</span>
            </div>
            );
    }
});
