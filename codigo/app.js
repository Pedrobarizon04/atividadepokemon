const express = require('express');
const Pokemon = require('./models/pokemon');

const app = express();

app.post('/pokemon', async (req, res) => {
  try {
    const { name, type, height, weight, powerLevel } = req.body;
    const newPokemon = await Pokemon.create({ name, type, height, weight, powerLevel });
    res.json(newPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

Pokemon.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});
