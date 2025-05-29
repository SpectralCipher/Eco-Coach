// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connecté à MongoDB !'))
.catch((err) => console.error('❌ Erreur de connexion MongoDB :', err));

// Middleware
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('EcoCoach Backend fonctionne 🚀');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
