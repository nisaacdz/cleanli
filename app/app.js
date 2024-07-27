const express = require('express');
const app = express();
const PORT = 3000;

// Define a basic GET route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running, and app is listening on port ${PORT}`);
  } else {
    console.error("Error occurred, server can't start", error);
  }
});