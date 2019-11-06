import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error) => (
                    <p>{error}</p>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="outer-div">
                <div className="main-div">

                    <div className="img-div">
                        <img className="" src="/instagram.png" alt="phone image" />
                    </div>

                    
                    <div className="forms-div">

                        <div className="form-div">
                            <form onSubmit={this.handleSubmit} className="auth-form">
                                <h3 className="logo-print">Insta</h3>
                                <label>
                                    <input
                                        className="form-field"
                                        type="text"
                                        value={this.state.username}
                                        placeholder="Username"
                                        onChange={this.update('username')}
                                    />
                                </label>
                                <label>
                                    <input
                                        className="form-field"
                                        type="password"
                                        value={this.state.password}
                                        placeholder="Password"
                                        onChange={this.update('password')}
                                    />
                                </label>

                                <ul className="error">{this.renderErrors()}</ul>

                                <input className="auth-button" type="submit" value="Log In" />
                            </form>
                        </div>

                        <div className="option-div">
                            <p>Don't have an account? 
                                <a to="#/signup"><span>Sign Up</span></a>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default LogInForm;