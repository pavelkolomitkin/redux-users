import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component
{
    render(){

        if (!this.props.user)
        {
            return (<div>Select user...</div>);
        }

        return (
            <div>
                <div>
                    <img src={this.props.user.thumbnail} />
                </div>
                <div>
                    <b>{this.props.user.first}</b> <b>{this.props.user.last}</b><span>({this.props.user.age})</span>
                </div>
                <div>
                    {this.props.user.description}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);