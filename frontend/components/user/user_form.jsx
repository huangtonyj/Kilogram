import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">


          {this.renderErrors()}

          <div className="signup-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>

            <br />

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>

            <br />

            <label>Email:
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>

            <br />

            <label>Description:
              <textarea
                value={this.state.description}
                onChange={this.update('description')}
                className="signup-input"
              />
            </label>

            <br />

            <input type="submit"
              value="Sign Up"
              className="session-submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
