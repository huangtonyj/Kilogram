import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullname: '',
      username: '',
      password: '',
      description: 'Hello, Welcome to Kilogram :)'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signUp(user);
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  demoLogin() {
    this.props.signIn({
      username: 'demo',
      password: 'starwars'
    });
  }

  render() {
    return (
      <div className="signin-form-container">

        <div className="signin-form">
          <img
            src={window.images.Kilogram_logo}
            className="kilogram-logo"
          />

          <div className='sign-up-caption'>
            <h2> Sign up to see photos and videos from your friends.</h2>
          </div>

          <div className='demo-login-container'>
            <button
              className="session-submit-button"
              onClick={this.demoLogin}>
              Log in with Demo User
            </button>
          </div>


          <div className='or-divider'>
            <div className='horizontal-line'></div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp; OR &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className='horizontal-line'></div>
          </div>

          <form onSubmit={this.handleSubmit} className="signin-form-box">

            <div className="signup-form">

              <div className='signin-input-container'>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signin-input input"
                  placeholder='Email'
                />
              </div>

              <div className='signin-input-container'>
                <input type="text"
                  value={this.state.fullname}
                  onChange={this.update('fullname')}
                  className="signin-input input"
                  placeholder='Full Name'
                />
              </div>

              <div className='signin-input-container'>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signin-input input"
                  placeholder='Username'
                />
              </div>

              <div className='signin-input-container'>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signin-input input"
                  placeholder='Password'
                />
              </div>

              <button type="submit"
                value="Sign up"
                className="session-submit-button">
                Sign up
            </button>

            </div>
          </form>

          <div className='sign-in-error'>
            {this.renderErrors()}
          </div>

          <div className='sign-up-agreement-container'>
            <p> By signing up, you agree to our &nbsp;
              <a href='#'>Terms</a> &nbsp;
              <a href='#'>Data Policy</a>&nbsp; and &nbsp;
              <a href='#'>Cookies Policy</a>.
            </p>
          </div>
        </div>

        <div className='sign-up-container'>
          <span>
            Have an account? <Link to='/signin'>Log in</Link>
          </span>
        </div>

        <div className='get-the-app-container'>
          <p>Get the app.</p>
          <div>
            <a>
              <img src={window.images.ios_app_store} />
            </a>
            <a>
              <img src={window.images.google_play_store} />
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default UserForm;
