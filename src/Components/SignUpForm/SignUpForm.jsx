import { useState } from 'react'
import './SignUpForm.css'
import { 
  signInWithGoogle, 
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword 
} from '../firebaseauth/firebaseConfig'
import { Link } from 'react-router-dom'

const SignUpForm = ({ onSignUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }
    
    try {
      // Create auth user
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      
      // Create user document in Firestore
      await createUserDocumentFromAuth({
        ...user,
        displayName: displayName || email.split('@')[0]
      })

      // Clear form
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setDisplayName('')
      setError(null)

      // Call onSignUp with user data
      onSignUp({
        uid: user.uid,
        email: user.email,
        displayName: displayName || email.split('@')[0]
      })

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use')
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters')
      } else {
        setError('Error creating user')
        console.error('User creation error:', error)
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle()
      const userDocRef = await createUserDocumentFromAuth(user)
      console.log('User document created:', userDocRef)
      onSignUp(user)
    } catch (error) {
      console.error('Google sign in error:', error)
      setError(error.message)
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="sign-in-form">
          <h1>Create Account</h1>
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
              Sign up with Google
            </button>
            <div className="divider">or</div>
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="email-sign-in">Sign Up</button>
            <p className="signup-link">
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm