import { useState } from 'react'
import LoginForm from './components/LoginForm'
import ChatRoom from './components/ChatRoom'
import { useSocket } from './socket/socket'

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { connect, disconnect, isConnected } = useSocket()

  const handleLogin = (name) => {
    setUsername(name)
    setIsLoggedIn(true)
    connect(name)
  }

  const handleLogout = () => {
    disconnect()
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ChatRoom 
          username={username} 
          onLogout={handleLogout}
          isConnected={isConnected}
        />
      )}
    </div>
  )
}

export default App