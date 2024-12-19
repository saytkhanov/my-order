#!/bin/bash
# start.sh

# Check if node_modules directory exists
if [ ! -d "node_modules" ]; then
    echo "Dependencies not found. Running npm install..."
    npm install
else
    echo "Dependencies already installed. Skipping npm install."
fi

# Run the backend server
node backend.js
