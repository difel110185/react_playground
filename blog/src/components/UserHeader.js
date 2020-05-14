import React from 'react';
import {connect} from "react-redux";

class UserHeader extends React.Component {
    renderList = () => {
        const {user} = this.props;

        if (!user)
            return null;

        return (
            <div className="header">{user.name}</div>
        );
    };

    render = () => {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    };
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps)(UserHeader);