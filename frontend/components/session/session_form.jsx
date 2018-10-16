import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import kilogramLogo from './kilogram_logo.png';
// import appleiOSAppStoreLogo from './ios_app_store.png';
// import googlePlayStoreLogo from './google_play_store.png';

// import kilogramLogo from '/app/assets/images/kilogram_logo.png';
// import appleiOSAppStoreLogo from '/app/assets/images/ios_app_store.png';
// import googlePlayStoreLogo from '/app/assets/images/google_play_store.png';

import kilogramLogo from '../../../app/assets/images/kilogram_logo.png';
import appleiOSAppStoreLogo from '../../../app/assets/images/ios_app_store.png';
import googlePlayStoreLogo from '../../../app/assets/images/google_play_store.png';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.signIn(user);
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
          <form onSubmit={this.handleSubmit} className="signin-form-box">



            <img
              src={kilogramLogo}
              className="kilogram-logo"
            />

            <div className='signin-input-container'>
              {/* <label className='signin-input-label'>
                Username
              </label> */}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input input"
                placeholder='Username'
              />
            </div>

            <div className='signin-input-container'>
              {/* <label className='signin-input-label'>
                Password
              </label> */}
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input input"
                placeholder='Password'
              />
            </div>


            <button type="submit"
              value="Log In"
              className="session-submit-button">
              Log in
            </button>
          </form>

          <div className='or-divider'>
            <div className='horizontal-line'></div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp; OR &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className='horizontal-line'></div>
          </div>


          <div className='demo-login-container'>
            <button onClick={this.demoLogin}>
              Log in with Demo User
              </button>
          </div>

          <div className='sign-in-error'>
            {this.renderErrors()}
          </div>

          <div className='forgot-password'>
            <a href='#'>Forgot password?</a>
          </div>

        </div>


        <div className='sign-up-container'>
          <span>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </span>
        </div>

        <div className='get-the-app-container'>
          <p>Get the app.</p>
          <div>
            <a>
              <img src={appleiOSAppStoreLogo} />
            </a>
            <a>
              <img src={googlePlayStoreLogo} />
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
