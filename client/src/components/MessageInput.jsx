import { useState, useRef, useEffect } from 'react'

function MessageInput({ onSendMessage, onTyping, disabled, placeholder = 'Type a message...' }) {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef(null)

  const handleInputChange = (e) => {
    const value = e.target.value
    setMessage(value)

    // Handle typing indicator
    if (value && !isTyping) {
      setIsTyping(true)
      onTyping(true)
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      onTyping(false)
    }, 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!message.trim() || disabled) return

    onSendMessage(message.trim())
    setMessage('')
    
    // Stop typing indicator
    setIsTyping(false)
    onTyping(false)
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
  }

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder={disabled ? 'Connecting...' : placeholder}
        disabled={disabled}
        className="message-input"
        maxLength={500}
      />
      <button 
        type="submit" 
        disabled={!message.trim() || disabled}
        className="btn-send"
      >
        Send 📤
      </button>
    </form>
  )
}

export default MessageInput