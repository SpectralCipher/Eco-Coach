const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB(); // on appelle la fonction ici

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur EcoCoach API avec MongoDB!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
