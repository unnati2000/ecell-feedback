import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import image from './creative-tech-workspace_71609-1333-removebg-preview.png';
//import image from './ecell.jpg';

const SignIn = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/allfeeds" />;
  }
  return (
    <div className="container">
      <div className="guidelines-section sign card">
        <div className="rules">
          <img src={image} />
          <h1 className="title is-2">Only Admins can access</h1>
        </div>
        <div className="signin">
          <h1 className="title is-1">Sign In </h1>
          <form onSubmit={onSubmit}>
            <label className="title is-5">Enter email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                placeholder="Email"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <br></br>
            <label className="title is-5">Enter password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <button className="button is-primary">SignIn</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignIn);
