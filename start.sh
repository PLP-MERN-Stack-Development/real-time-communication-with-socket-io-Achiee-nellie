#!/bin/bash

# Startup script for Socket.io Chat Application
# This script checks if services are already running before starting them

PROJECT_ROOT="/c/Users/hp/Desktop/plp_Academy/real-time-communication-with-socket-io-Achiee-nellie"
SERVER_DIR="$PROJECT_ROOT/server"
CLIENT_DIR="$PROJECT_ROOT/client"
SERVER_PORT=5000
SERVER_LOG="/tmp/server.log"

echo "🚀 Starting Socket.io Chat Application..."
echo "=========================================="

# Function to check if a port is in use
check_port() {
    lsof -ti:$1 > /dev/null 2>&1
    return $?
}

# Function to check if server is running
check_server() {
    pgrep -f "node server.js" > /dev/null 2>&1
    return $?
}

# Step 1: Check and start backend server
echo ""
echo "📡 Checking backend server (port $SERVER_PORT)..."
if check_port $SERVER_PORT || check_server; then
    echo "✅ Backend server is already running on port $SERVER_PORT"
    SERVER_PID=$(lsof -ti:$SERVER_PORT)
    echo "   Process ID: $SERVER_PID"
else
    echo "🔄 Starting backend server..."
    cd "$SERVER_DIR"
    node server.js > "$SERVER_LOG" 2>&1 &
    sleep 3
    
    if check_port $SERVER_PORT; then
        SERVER_PID=$(lsof -ti:$SERVER_PORT)
        echo "✅ Backend server started successfully on port $SERVER_PORT"
        echo "   Process ID: $SERVER_PID"
        echo "   Logs: $SERVER_LOG"
    else
        echo "❌ Failed to start backend server"
        echo "   Check logs at: $SERVER_LOG"
        exit 1
    fi
fi

# Step 2: Check and start frontend client
echo ""
echo "🎨 Checking frontend client..."
if pgrep -f "vite" > /dev/null 2>&1; then
    echo "✅ Frontend client is already running"
    CLIENT_PID=$(pgrep -f "vite")
    echo "   Process ID: $CLIENT_PID"
    
    # Try to find the port it's running on
    CLIENT_PORT=$(lsof -Pan -p $CLIENT_PID -i | grep LISTEN | awk '{print $9}' | cut -d: -f2 | head -1)
    if [ -n "$CLIENT_PORT" ]; then
        echo "   URL: http://localhost:$CLIENT_PORT"
    fi
else
    echo "🔄 Starting frontend client..."
    cd "$CLIENT_DIR"
    npm run dev &
    sleep 4
    
    if pgrep -f "vite" > /dev/null 2>&1; then
        CLIENT_PID=$(pgrep -f "vite")
        echo "✅ Frontend client started successfully"
        echo "   Process ID: $CLIENT_PID"
        
        # Find the port it's running on
        CLIENT_PORT=$(lsof -Pan -p $CLIENT_PID -i | grep LISTEN | awk '{print $9}' | cut -d: -f2 | head -1)
        if [ -n "$CLIENT_PORT" ]; then
            echo "   URL: http://localhost:$CLIENT_PORT"
        fi
    else
        echo "❌ Failed to start frontend client"
        exit 1
    fi
fi

echo ""
echo "=========================================="
echo "✨ Application is ready!"
echo ""
echo "📋 Service Status:"
echo "   Backend:  http://localhost:$SERVER_PORT"
if [ -n "$CLIENT_PORT" ]; then
    echo "   Frontend: http://localhost:$CLIENT_PORT"
else
    echo "   Frontend: Check terminal output for URL"
fi
echo ""
echo "💡 To stop services:"
echo "   pkill -9 node"
echo ""