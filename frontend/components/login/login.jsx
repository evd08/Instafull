import React from 'react';

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
                <div>
                    <img className="" src="/instagram.png" alt="phone image" />
                </div>

                

                <div className="auth-box">
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

            </div>
        )
    }
}

export default LogInForm;