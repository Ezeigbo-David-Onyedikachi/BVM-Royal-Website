/**
 * Simple HTTP Server for BVM Royal Concept Website
 * Run: node server.js
 * Or: npm start (if package.json is set up)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Remove query string and decode URL
    let filePath = '.' + req.url.split('?')[0];
    
    // Default to index.html
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop the server\n');
    
    // Try to open browser automatically
    const { exec } = require('child_process');
    const platform = process.platform;
    let command;
    
    if (platform === 'win32') {
        command = `start http://localhost:${PORT}`;
    } else if (platform === 'darwin') {
        command = `open http://localhost:${PORT}`;
    } else {
        command = `xdg-open http://localhost:${PORT}`;
    }
    
    exec(command, (error) => {
        if (error) {
            console.log('Please open http://localhost:' + PORT + ' in your browser');
        }
    });
});

