💬 Real-Time Chat Application
A full-stack real-time chat application built with Socket.io, React, Express, and Node.js. Features include real-time messaging, typing indicators, private messaging, user presence, and a responsive UI.

Chat ApplicationReactExpress

✨ Features
Core Features
✅ Real-time Messaging - Instant bidirectional communication using Socket.io
✅ User Authentication - Simple username-based authentication
✅ Online User List - See who’s currently online
✅ Typing Indicators - Know when others are typing
✅ Private Messaging - One-on-one private conversations
✅ Join/Leave Notifications - System messages when users join or leave
✅ Connection Status - Visual indicator of connection state
✅ Message Timestamps - All messages include time sent
✅ Responsive Design - Works seamlessly on desktop and mobile
Advanced Features
🔄 Auto-reconnection - Automatically reconnects on connection loss
💬 Message History - Stores last 100 messages in memory
🎨 Modern UI - Clean, intuitive interface with smooth animations
📱 Mobile Responsive - Optimized for all screen sizes
⚡ Performance Optimized - Efficient Socket.io event handling
🏗️ Project Structure
real-time-communication-with-socket-io/
├── client/                      # React frontend
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── LoginForm.jsx    # User login interface
│   │   │   ├── ChatRoom.jsx     # Main chat container
│   │   │   ├── MessageList.jsx  # Message display
│   │   │   ├── MessageInput.jsx # Message input with typing
│   │   │   ├── UserList.jsx     # Online users sidebar
│   │   │   └── TypingIndicator.jsx # Typing status display
│   │   ├── socket/
│   │   │   └── socket.js        # Socket.io client setup
│   │   ├── App.jsx              # Main app component
│   │   ├── App.css              # Application styles
│   │   └── main.jsx             # React entry point
│   ├── index.html               # HTML template
│   ├── vite.config.js           # Vite configuration
│   ├── package.json             # Client dependencies
│   └── .env                     # Client environment variables
├── server/                      # Node.js backend
│   ├── server.js                # Express & Socket.io server
│   ├── package.json             # Server dependencies
│   ├── .env                     # Server environment variables
│   └── .env.example             # Environment template
├── README.md                    # Original assignment readme
├── Week5-Assignment.md          # Assignment details
└── PROJECT_README.md            # This file
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
npm or yarn
Modern web browser
Installation
Clone the repository

git clone <your-repo-url>
cd real-time-communication-with-socket-io-Achiee-nellie-main
Install server dependencies

cd server
npm install
Install client dependencies

cd ../client
npm install
Running the Application
Start the server (in the server directory)

cd server
npm run dev
Server will run on http://localhost:5000

Start the client (in the client directory, in a new terminal)

cd client
npm run dev
Client will run on http://localhost:5173

Open your browser

Navigate to http://localhost:5173
Enter a username to join the chat
Open multiple browser windows/tabs to test real-time features
🎮 Usage Guide
Joining the Chat
Enter a username (3-20 characters)
Click “Join Chat”
You’ll be connected to the main chat room
Sending Messages
Type your message in the input field at the bottom
Press Enter or click “Send 📤”
Your message appears instantly for all users
Private Messaging
Click on a user in the “Online Users” sidebar
The chat switches to private mode
Send messages that only that user can see
Click “✕ Back to main chat” to return to the main room
Typing Indicators
Start typing and others will see “[Your name] is typing…”
Stops automatically after 1 second of inactivity
User Management
See all online users in the right sidebar
Toggle sidebar visibility with “👥 Show/Hide Users”
Green dot (●) indicates online status
🛠️ Technical Details
Server (Node.js + Express + Socket.io)
Key Technologies:

Express.js for HTTP server
Socket.io for WebSocket communication
CORS enabled for cross-origin requests
In-memory storage for users and messages
Socket Events:

user_join - User connects with username
send_message - Broadcast message to all users
private_message - Send message to specific user
typing - Broadcast typing status
disconnect - Handle user disconnection
Client (React + Socket.io Client)
Key Technologies:

React 18 with Hooks
Socket.io Client for real-time communication
Vite for fast development and building
CSS3 for modern styling
Custom Hooks:

useSocket() - Manages Socket.io connection and events
Components:

LoginForm - User authentication
ChatRoom - Main chat container
MessageList - Displays all messages
MessageInput - Input with typing detection
UserList - Shows online users
TypingIndicator - Displays typing status
🎨 Features Breakdown
1. Real-time Messaging
Instant message delivery using Socket.io
No page refresh needed
Messages appear for all connected users
2. User Presence
Online user list updates in real-time
Join/leave notifications
Connection status indicator
3. Typing Indicators
Shows when users are typing
Automatically stops after 1 second
Displays multiple users typing
4. Private Messaging
Click any user to start private chat
Messages marked with 🔒 badge
Separate conversation threads
5. Responsive Design
Mobile-friendly interface
Collapsible user sidebar
Touch-optimized controls
📊 Performance Optimizations
Message Limiting: Stores only last 100 messages to prevent memory issues
Event Throttling: Typing indicators use timeout to reduce events
Auto-scroll: Messages automatically scroll to bottom
Reconnection Logic: Handles disconnections gracefully
🔒 Security Considerations
Current Implementation:

Simple username-based authentication (for demo purposes)
No password or JWT authentication
Messages stored in memory (not persistent)
Production Recommendations:

Implement JWT authentication
Add user registration/login
Use a database (MongoDB, PostgreSQL)
Add rate limiting
Sanitize user inputs
Use HTTPS in production
🚢 Deployment
Server Deployment (Render, Railway, Heroku)
Create account on deployment platform
Connect your GitHub repository
Set environment variables:
PORT=5000
CLIENT_URL=https://your-client-url.com
NODE_ENV=production
Deploy from server directory
Client Deployment (Vercel, Netlify)
Create account on deployment platform
Connect your GitHub repository
Set build settings:
Build command: npm run build
Output directory: dist
Set environment variable:
VITE_SOCKET_URL=https://your-server-url.com
Deploy from client directory
🐛 Troubleshooting
Connection Issues
Ensure server is running on port 5000
Check client .env has correct VITE_SOCKET_URL
Verify CORS settings in server.js
Messages Not Appearing
Check browser console for errors
Verify Socket.io connection status
Ensure both client and server are running
Typing Indicator Not Working
Check that typing events are being emitted
Verify timeout is clearing properly
Look for console errors
📝 Assignment Completion
This project fulfills all requirements from Week5-Assignment.md:

Task 1: Project Setup ✅
Node.js server with Express
Socket.io configured on server
React frontend application
Socket.io client setup
Basic connection established
Task 2: Core Chat Functionality ✅
User authentication (username-based)
Global chat room
Messages with sender name and timestamp
Typing indicators
Online/offline status
Task 3: Advanced Chat Features ✅
Private messaging between users
User is typing indicator
Message delivery in real-time
Task 4: Real-Time Notifications ✅
New message notifications
User join/leave notifications
Visual connection status
Task 5: Performance and UX Optimization ✅
Reconnection logic
Optimized Socket.io usage
Responsive design (desktop and mobile)
Smooth animations and transitions
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Created as part of Week 5 Assignment - Real-Time Communication with Socket.io

🙏 Acknowledgments
Socket.io documentation and examples
React documentation
Express.js documentation
The open-source community
Note: This is a demonstration project for educational purposes. For production use, implement proper authentication, database storage, and security measures.