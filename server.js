console.log("Backend service initialized.");

// Placeholder for a simple Node.js server setup, suitable for testing or basic deployment.
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'POST' && req.url === '/api/order') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const orderData = JSON.parse(body);
        // In a real application, order processing logic would go here.
        console.log('Received Order Payload:', orderData);
        res.end(JSON.stringify({ success: true, message: "Order received and processing." }));
      } catch (e) {
        res.statusCode = 400;
        res.end(JSON.stringify({ success: false, message: "Invalid JSON format." }));
      }
    });
  } else {
    res.end(JSON.stringify({ status: "running", service: "Pizza Backend API Placeholder" }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});