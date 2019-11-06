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

    render() {
        return (
            <div className="outer-div">
                <div>
                    <img className="" src="/instagram.png" alt="phone image"/>
                </div>

                <div className="auth-box">
                    <form onSubmit={this.handleSubmit} className="auth-form">
                        <div>
                            {this.props.errors.map((error, idx) => {
                                return <p className="error">{error}</p>
                            })}
                        </div>

                        <h3 className="logo-print">Insta</h3>
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
                        <br/><br/>
                        <input className="auth-button" type="submit" value="Sign Up"/>
                    </form>
                </div>

            </div>
        )
    }
}

export default SignUpForm;