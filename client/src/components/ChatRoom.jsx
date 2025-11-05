import { useState } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import UserList from './UserList'
import TypingIndicator from './TypingIndicator'
import { useSocket } from '../socket/socket'

function ChatRoom({ username, onLogout, isConnected }) {
  const [showUserList, setShowUserList] = useState(true)
  const [selectedUser, setSelectedUser] = useState(null)
  const { 
    messages, 
    users, 
    typingUsers, 
    sendMessage, 
    sendPrivateMessage,
    setTyping 
  } = useSocket()

  const handleSendMessage = (message) => {
    if (selectedUser) {
      sendPrivateMessage(selectedUser.id, message)
    } else {
      sendMessage(message)
    }
  }

  const handleUserSelect = (user) => {
    if (user.id === selectedUser?.id) {
      setSelectedUser(null) // Deselect if clicking the same user
    } else {
      setSelectedUser(user)
    }
  }

  const filteredMessages = selectedUser
    ? messages.filter(msg => 
        msg.isPrivate && 
        (msg.senderId === selectedUser.id || msg.senderId === users.find(u => u.username === username)?.id)
      )
    : messages.filter(msg => !msg.isPrivate)

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="header-left">
          <h2>💬 Chat Room</h2>
          <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '● Connected' : '○ Disconnected'}
          </span>
        </div>
        
        <div className="header-right">
          <span className="username-display">👤 {username}</span>
          <button 
            className="btn-toggle-users"
            onClick={() => setShowUserList(!showUserList)}
          >
            {showUserList ? '👥 Hide Users' : '👥 Show Users'}
          </button>
          <button className="btn-logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="chat-main">
        <div className="chat-content">
          {selectedUser && (
            <div className="private-chat-header">
              <span>Private chat with {selectedUser.username}</span>
              <button 
                className="btn-close-private"
                onClick={() => setSelectedUser(null)}
              >
                ✕ Back to main chat
              </button>
            </div>
          )}
          
          <MessageList 
            messages={filteredMessages} 
            currentUsername={username}
          />
          
          <TypingIndicator 
            typingUsers={typingUsers.filter(user => user !== username)} 
          />
          
          <MessageInput 
            onSendMessage={handleSendMessage}
            onTyping={setTyping}
            disabled={!isConnected}
            placeholder={
              selectedUser 
                ? `Message ${selectedUser.username}...` 
                : 'Type a message...'
            }
          />
        </div>

        {showUserList && (
          <UserList 
            users={users.filter(user => user.username !== username)}
            currentUsername={username}
            onUserSelect={handleUserSelect}
            selectedUser={selectedUser}
          />
        )}
      </div>
    </div>
  )
}

export default ChatRoom