import { useState,useEffect } from 'react'
import './SignInForm.css'
import { getRedirectResult } from 'firebase/auth'
import { signInWithGoogle, createUserDocumentFromAuth } from '../firebaseauth/firebaseConfig'
import { Link } from 'react-router-dom'

const SignInForm = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
 
  const handleGoogleSignIn = async () => {
    console.log("Google button clicked");
    try {
      setError(null); // Clear any existing errors
      console.log("Starting Google Sign In...");
      const user = await signInWithGoogle();
      console.log("Got user from Google:", user);
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log("Created user document:", userDocRef);
      onLogin(user);
    } catch (error) {
      console.error("Detailed error:", error);
      if (error.code === 'auth/cancelled-popup-request' || 
          error.code === 'auth/popup-closed-by-user') {
        setError('Sign in was cancelled');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup was blocked by the browser. Please allow popups and try again.');
      } else {
        setError('An error occurred during sign in. Please try again.');
      }
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    onLogin({ email: email })
  }

  console.log("Rendering SignInForm");

  return (
    <div className="login-container">
      
      <div className="login-content">
        <div className="sign-in-form">
          <h1>Hi there!</h1>
          <p>Welcome to Course Advisor</p>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <button 
              type="button" 
              className="google-sign-in"
              onClick={handleGoogleSignIn}
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google logo" 
                className="google-icon"
              />
              Log in with Google
            </button>
            <div className="divider">or</div>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            <button type="submit" className="email-sign-in">Log in</button>
            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInForm