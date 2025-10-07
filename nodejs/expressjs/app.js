//Importe o express
const express = require('express');

const app = express();
const port = 3000;

//Middleware para dedinir o cabeçalho da resposta como HTML
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  next();
});
//roteamento básico
app.get('/', (req, res) => {
  res.send('<h1>Olá, mundo!</h1><p>Bem-vindo ao meu servidor Express.</p>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre Nós</h1><p>Esta é a página sobre nós.</p>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1><p>Entre em contato conosco através do email: contato@exemplo.com</p>');    
});

//Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 
//Middleware para tratar rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).send('<h1>404 - Página Não Encontrada</h1><p>A página que você está procurando não existe.</p>');
});us
app.get('/fotos', (req, res) => {
  res.send('<h1>Galeria de Fotos</h1><p>Aqui estão algumas fotos incríveis!</p>');    
});
app.use((req, res) => {
  res.status(404).send('<h1>404 - Página Não Encontrada</h1><p>A página que você está procurando não existe.</p>');
} );    
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});e((req, res) => {
  res.status(404).send('<h1>404 - Página Não Encontrada</h1><p>A página que você está procurando não existe.</p>');
});    
app.get('/fotos', (req, res) => {
  res.send('<h1>Galeria de Fotos</h1><p>Aqui estão algumas fotos incríveis!</p>');    
});
app.use((req, res) => {
  res.status(404).send('<h1>404 - Página Não Encontrada</h1><p>A página que você está procurando não existe.</p>');
} );    
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});