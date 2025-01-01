import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resetUserPassword } from '../firebaseauth/firebaseConfig'
import './ForgotPassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await resetUserPassword(email)
      setSuccessMessage('Password reset email sent! Check your inbox.')
      setError(null)
      setEmail('')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email')
      } else {
        setError('Error sending reset email. Please try again.')
      }
      console.error('Password reset error:', error)
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="sign-in-form">
          <h1>Reset Password</h1>
          <p>Enter your email to receive a password reset link</p>
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="email-sign-in">Send Reset Link</button>
            <p className="signup-link">
              Remember your password? <Link to="/">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword 