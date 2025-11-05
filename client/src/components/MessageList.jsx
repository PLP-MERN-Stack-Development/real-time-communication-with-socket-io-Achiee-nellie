import { useEffect, useRef } from 'react'

function MessageList({ messages, currentUsername }) {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-messages">
          <p>No messages yet. Start the conversation! 👋</p>
        </div>
      ) : (
        messages.map((msg) => {
          if (msg.system) {
            return (
              <div key={msg.id} className="message system-message">
                <span>{msg.message}</span>
              </div>
            )
          }

          const isOwnMessage = msg.sender === currentUsername
          
          return (
            <div 
              key={msg.id} 
              className={`message ${isOwnMessage ? 'own-message' : 'other-message'} ${msg.isPrivate ? 'private-message' : ''}`}
            >
              <div className="message-header">
                <span className="message-sender">
                  {isOwnMessage ? 'You' : msg.sender}
                </span>
                <span className="message-time">{formatTime(msg.timestamp)}</span>
                {msg.isPrivate && (
                  <span className="private-badge">🔒 Private</span>
                )}
              </div>
              <div className="message-content">
                {msg.message}
              </div>
            </div>
          )
        })
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageList