import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { history } from '../../utils/History/history';
import { authUser } from '../../selectors/AuthSelector';
import './LoginPageView.css';

class LoginPageView extends Component {
    componentWillMount() {
        if (this.props.loggedIn) {
            history.push('/');
        }
    }

    render() {
        return (
            <div className="login-page-view">
                <LoginForm />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn } = authUser(state);
    return {
        loggingIn,
        loggedIn
    };
}

const connectedPageView = connect(mapStateToProps)(LoginPageView);
export { connectedPageView as LoginPageView };
