const express = require('express');
const app = express();
const routes = require('./Routes/routes');

app.use(express.json()); // para fazer o parse do corpo das requisições como JSON

// associando o roteador à aplicação
app.use('/', routes);

// definindo uma rota básica para teste
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000...');
});
