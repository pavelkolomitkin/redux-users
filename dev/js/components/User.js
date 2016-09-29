import React from 'react';

export default React.createClass({

    getInitialState: function()
    {
        return this.props;
    },

    render: function()
    {
        return (
            <div>
                <div>
                    <img src={this.state.thumbnail} />
                </div>
                <div>
                    <b>{this.state.first}</b> <b>{this.state.last}</b><span>({this.state.age})</span>
                </div>
                <div>
                    {this.state.description}
                </div>
            </div>
        );
    }
});