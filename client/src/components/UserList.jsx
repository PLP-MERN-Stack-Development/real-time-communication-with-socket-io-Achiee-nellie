function UserList({ users, currentUsername, onUserSelect, selectedUser }) {
  return (
    <aside className="user-list">
      <div className="user-list-header">
        <h3>Online Users ({users.length})</h3>
      </div>
      
      <div className="user-list-content">
        {users.length === 0 ? (
          <div className="no-users">
            <p>No other users online</p>
          </div>
        ) : (
          <ul>
            {users.map((user) => (
              <li 
                key={user.id} 
                className={`user-item ${selectedUser?.id === user.id ? 'selected' : ''}`}
                onClick={() => onUserSelect(user)}
                title={`Click to chat privately with ${user.username}`}
              >
                <span className="user-status">●</span>
                <span className="user-name">{user.username}</span>
                {selectedUser?.id === user.id && (
                  <span className="chat-indicator">💬</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="user-list-footer">
        <p className="hint">💡 Click a user to start a private chat</p>
      </div>
    </aside>
  )
}

export default UserList