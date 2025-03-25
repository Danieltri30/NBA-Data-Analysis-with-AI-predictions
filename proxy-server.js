// Imports required modules
const express = require("express");
const axios = require("axios");
const cors = require("cors");

// Creates the app
const app = express();
const PORT = 4000;

// API key from balldontlie
const API_KEY = "4f1f0467-2ef0-44a9-8f2a-9c4ac1b6605b";

// Enables CORS
app.use(cors());

// Defines route to fetch games data for a given date
app.get("/api/games", async (req, res) => {
  const { date } = req.query;

  // Constructs the URL to call the external API
  const url = `https://api.balldontlie.io/v1/games?start_date=${date}&end_date=${date}`;
  console.log("Calling:", url);

  try {
    // Sends request to the balldontlie API with the API key
    const response = await axios.get(url, {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    });

    // Sends the response back to the frontend
    res.json(response.data);
  } catch (err) {
    // Logs and returns error if fetch fails
    console.error("Axios request error:", err.message);
    res.status(500).json({ error: "Failed to fetch from balldontlie" });
  }
});

// Starts the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});