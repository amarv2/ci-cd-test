import React, { Component } from 'react';

import './LoginButton.css';

class LoginButton extends Component {
    render() {
        if (this.props.loggingIn) {

            return (
                
            <button type="submit" className="login-button">
                <i class="fas fa-spinner" />
            </button>
        );
        }
            return (
                <button type="submit" className="login-button">
                    {this.props.buttonText}
                </button>
            )
        }
    }


export default LoginButton;
