import React from 'react';

class SignUpForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
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
            <div className="auth-div">
                <div className="main-div">

                    <div className="img-div">
                        <img className="" src={window.instagramURL} alt="phone image"/>
                        {/* question */}
                    </div>

                    <div className="forms-div"> 
                        <div className="form-div">
                            <form onSubmit={this.handleSubmit} className="auth-form">

                                <h3 className="logo-print">InstaPlaces</h3>
                                <h2 className="msg1">Sign up to see photos and videos from your friends</h2>
                                <br/>
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
                                        type="text"
                                        value={this.state.name}
                                        placeholder="Name"
                                        onChange={this.update('name')}
                                    />
                                </label>
                                <label>
                                    <input 
                                        className="form-field"
                                        type="text"
                                        value={this.state.email}
                                        placeholder="Email"
                                        onChange={this.update('email')}
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
                                <p>minimum of 6 characters</p>
                                <br/><br/>
                                <input className="auth-button" type="submit" value="Sign Up"/>
                                <ul className="error">{this.renderErrors()}</ul>
                            </form>
                        </div>

                        <div className="option-div">
                            <p>Have an account?
                                <a href="#/login"><span>Log In</span></a>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="footer-div">
                    <a target="_blank" href="https://evd08.github.io/">About Me</a>
                    <a target="_blank" href="https://github.com/evd08">Github</a>
                    <a target="_blank" href="https://www.linkedin.com/in/eunice-dayrit/">LinkedIn</a>
                    {/* <a href="https://www.appacademy.io">App Academy</a> */}
                </div>
            </div>
        )
    }
}

export default SignUpForm;