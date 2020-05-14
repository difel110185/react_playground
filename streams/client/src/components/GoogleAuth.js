import React from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '219673760434-574ara7ovbn5k0k2gtjd0s1mjhluee8p.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else
            this.props.signOut();
    };

    onSignInButtonClick = () => {
        this.auth.signIn();
    };

    onSignOutButtonClick = () => {
        this.auth.signOut();
    };

    renderAuthButton = () => {
        if (this.props.isSignedIn === null)
            return null;

        if (this.props.isSignedIn)
            return (
                <button className="ui red google button" onClick={this.onSignOutButtonClick}>
                    <i className="google icon" />
                    Sign out
                </button>
            );

        return (
            <button className="ui red google button" onClick={this.onSignInButtonClick}>
                <i className="google icon" />
                Sign in with Google
            </button>
        );
    };

    render = () => {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);