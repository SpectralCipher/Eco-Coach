const express = require('express');
const connectDB = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connexion à MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Bienvenue sur EcoCoach API avec MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
