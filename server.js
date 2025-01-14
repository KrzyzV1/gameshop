const express = require("express");
const cors = require("cors");

const app = express();

// Ustawienia CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Zezwól na żądania tylko z tego originu
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Jeśli używasz ciastek lub nagłówków autoryzacji
  })
);

// Reszta konfiguracji serwera
app.get("/games", (req, res) => {
  res.json([{ id: 1, name: "Example Game" }]);
});

app.listen(8080, () => console.log("Serwer działa na porcie 8080"));
