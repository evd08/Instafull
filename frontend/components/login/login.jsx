import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.login({username: 'demo', password:'Philippines'});
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
                        <img className="" src={window.instagram} alt="phone image" /> 
                        {/* question */}
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

                                <br/>
                                <input 
                                    className="auth-button" 
                                    type="submit" 
                                    value="Log In" 
                                />
                                <button 
                                    className="auth-button" 
                                    onClick={this.handleDemoSubmit}>
                                        Demo Log In
                                </button>

                                <ul className="error">{this.renderErrors()}</ul>
                            </form>
                        </div>

                        <div className="option-div">
                            <p>Don't have an account? 
                                <a href="#/signup"><span>Sign Up</span></a>
                            </p>
                        </div>

                    </div>

                </div>

                <div className="footer-div">
                    <a href="https://github.com/evd08">About Me</a>
                    <a href="https://github.com/evd08">Github</a>
                    <a href="https://www.appacademy.io">App Academy</a>
                    <a href="www.appacademy.io">FAQs</a>
                </div>
            </div>
        )
    }
}

export default LogInForm;