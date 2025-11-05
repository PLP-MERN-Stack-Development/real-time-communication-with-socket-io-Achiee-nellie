function TypingIndicator({ typingUsers }) {
  if (typingUsers.length === 0) return null

  const getTypingText = () => {
    if (typingUsers.length === 1) {
      return `${typingUsers[0]} is typing...`
    } else if (typingUsers.length === 2) {
      return `${typingUsers[0]} and ${typingUsers[1]} are typing...`
    } else {
      return `${typingUsers.length} people are typing...`
    }
  }

  return (
    <div className="typing-indicator">
      <span className="typing-text">{getTypingText()}</span>
      <span className="typing-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  )
}

export default TypingIndicator