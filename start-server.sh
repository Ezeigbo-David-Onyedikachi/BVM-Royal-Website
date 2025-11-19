#!/bin/bash

echo "Starting BVM Royal Concept Website Server..."
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "Using Python server..."
    python3 server.py
elif command -v python &> /dev/null; then
    echo "Using Python server..."
    python server.py
# Check if Node.js is available
elif command -v node &> /dev/null; then
    echo "Using Node.js server..."
    node server.js
# If neither is available, open directly in browser
else
    echo "No server found. Opening in browser directly..."
    echo "Note: Some features work better with a local server."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open index.html
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open index.html
    fi
fi

