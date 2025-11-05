import { useState } from 'react'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!username.trim()) {
      setError('Please enter a username')
      return
    }

    if (username.length < 3) {
      setError('Username must be at least 3 characters')
      return
    }

    if (username.length > 20) {
      setError('Username must be less than 20 characters')
      return
    }

    onLogin(username.trim())
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>💬 Real-Time Chat</h1>
          <p>Connect and chat with others in real-time</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Enter your username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError('')
              }}
              placeholder="Your username..."
              autoFocus
              maxLength={20}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          
          <button type="submit" className="btn-primary">
            Join Chat
          </button>
        </form>

        <div className="login-footer">
          <p>Built with Socket.io & React</p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm