import React, { useState } from 'react';
import './Login.css'; 


function Login() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className="body">    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="signin-signup">
        <form action="" className={`sign-in-form ${isSignUpMode ? 'sign-up-form-hidden' : ''}`}>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            Dont have an account? <a href="#" id="sign-up-btn2" >Sign up</a>
          </p>
        </form>
        <form action="" className={`sign-up-form ${isSignUpMode ? '' : 'sign-up-form-hidden'}`}>
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign up" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            Already have an account? <a href="#" id="sign-in-btn2">Sign in</a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? 'hidden' : ''}`}>
          <div className="content">
            <h3>Member of Brand?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?
            </p>
            <button className="btn" id="sign-in-btn" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>
        <div className={`panel right-panel ${isSignUpMode ? '' : 'hidden'}`}>
          <div className="content">
            <h3>New to Brand?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?
            </p>
            <button className="btn" id="sign-up-btn" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
    </div>

  );
}

export default Login;
