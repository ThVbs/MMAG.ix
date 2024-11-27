const { Client } = require('pg');
const client = new Client({
  host: 'localhost',       
  port: 5432,              
  user: 'postgres',     
  password: 'postgres',   
  database: 'MMAG.ix' 
});
async function conectarBancoDeDados() {
  try {
    await client.connect();  // Estabelece a conexão
    console.log('Conexão bem-sucedida com o banco de dados!');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  }
}

// Executa a conexão
conectarBancoDeDados();
