import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.update = this.update.bind(this);
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
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      const formTypeController = () => {
        if (this.props.formType === 'signup') {
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input className="form-field" id="field-1" placeholder="Email Address" type="text" 
                value={this.state.email} onChange={this.update("email")}/>
                <input className="form-field" placeholder="Password" type="password"
                value={this.state.password} onChange={this.update("password")}/>
                <br/>
                <div class="input-group">
                  {/* <input type="submit" className="splash-signup-btn" value={"TRY 30 DAYS FREE"} >
                  <span class="input-group-arrow"> <i  class="fas fa-chevron-right"></i> </span> </input> */}
                  <button onClick={this.handleSubmit} className="splash-signup-btn" > TRY 30 DAYS FREE <span class="input-arrow"> <i  class="fas fa-chevron-right"></i> </span> </button>
                </div>
              </form>
            </div>
          )
        } else {
          return (
              <div>
                  <h2>Login</h2>
                  <form>
                    <div className="signup-box">
                      <label>Email:
                          <input type="text" value={this.state.email} onChange={this.update("email")} />
                      </label>
                      <label>Password:
                          <input type="password" value={this.state.password} onChange={this.update("password")} />
                      </label>
                    </div>
                      
                      <button onClick={this.handleSubmit}>Log In</button>
                  </form>
                  <Link to="/signup">New user? Sign up here</Link>
              </div>
          )
      }
    }
    return (
      <div>
          {formTypeController()}
      </div>
    )
  }
}

export default SessionForm;

{/* <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="form-input"
              />
            </label>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
              />
            </label>
            <input className="splash-signup-btn" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>

export default SessionForm; */}
