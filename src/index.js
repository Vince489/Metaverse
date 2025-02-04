// Import the express app
const app = require("./app");

// Define the port
const PORT = 3001;

// Function to start the server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

// Start the server
startServer();
