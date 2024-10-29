const express = require('express');
const path = require('path');
const app = express();

// Serve the index.html file as the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to download the PDF file
app.get('/download-pdf', (req, res) => {
  const filePath = path.join(__dirname, 'download/July_2024.pdf'); // Corrected path to your PDF file
  res.download(filePath, 'July_2024.pdf', (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Could not download file.");
    }
  });
});

// Serve static files (CSS, JS, etc.) from the current directory
app.use(express.static(__dirname));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
