// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',         // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',        // Certifique-se de que o PostgreSQL está rodando em localhost
    database: 'pokemon_db',   // Nome do banco de dados que você criou
    password: '1111',    // Substitua pela senha correta
    port: 5432                // Porta padrão do PostgreSQL
});

// Teste de conexão
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Erro ao conectar ao banco de dados:', err.stack);
    }
    console.log('Conectado ao banco de dados PostgreSQL');
    release();
});

module.exports = pool;
