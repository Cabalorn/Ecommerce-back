const express = require('express');
const { Sequelize } = require('sequelize');

// Importando os modelos das tabelas
const Categoria = require('./models/categoria');
const Hardware = require('./models/hardware');
const Produto = require('./models/produto');

// Criando uma instância do Sequelize e conectando ao banco de dados
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Criando tabelas no banco de dados a partir dos modelos
sequelize.sync();

// Criando uma instância do Express e configurando o uso de JSON nas requisições
const app = express();
app.use(express.json());

// Rotas CRUD para a tabela Categoria
app.get('/categorias', async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
});

app.post('/categorias', async (req, res) => {
  const categoria = await Categoria.create(req.body);
  res.json(categoria);
});

app.put('/categorias/:id', async (req, res) => {
  const { id } = req.params;
  const categoria = await Categoria.findByPk(id);
  if (!categoria) {
    return res.status(404).json({ mensagem: 'Categoria não encontrada' });
  }
  categoria.nome = req.body.nome;
  await categoria.save();
  res.json(categoria);
});

app.delete('/categorias/:id', async (req, res) => {
  const { id } = req.params;
  const categoria = await Categoria.findByPk(id);
  if (!categoria) {
    return res.status(404).json({ mensagem: 'Categoria não encontrada' });
  }
  await categoria.destroy();
  res.json({ mensagem: 'Categoria excluída com sucesso' });
});

// Rotas CRUD para a tabela Hardware
app.get('/hardwares', async (req, res) => {
  const hardwares = await Hardware.findAll();
  res.json(hardwares);
});

app.post('/hardwares', async (req, res) => {
  const hardware = await Hardware.create(req.body);
  res.json(hardware);
});

app.put('/hardwares/:id', async (req, res) => {
  const { id } = req.params;
  const hardware = await Hardware.findByPk(id);
  if (!hardware) {
    return res.status(404).json({ mensagem: 'Hardware não encontrado' });
  }
  hardware.nome = req.body.nome;
  hardware.descricao = req.body.descricao;
  hardware.preco = req.body.preco;
  await hardware.save();
  res.json(hardware);
});

app.delete('/hardwares/:id', async (req, res) => {
  const { id } = req.params;
  const hardware = await Hardware.findByPk(id);
  if (!hardware) {
    return res.status(404).json({ mensagem: 'Hardware não encontrado' });
  }
  await hardware.destroy();
  res.json({ mensagem: 'Hardware excluído com sucesso' });
});

// Rotas CRUD para a tabela Produto
app.get('/produtos', async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

app.post('/produtos', async (req, res) => {
  const produto = await Produto.create(req.body);
  res.json(produto);
});

app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const produto = await Produto.findById(id);
    // restante do código
  })
  
