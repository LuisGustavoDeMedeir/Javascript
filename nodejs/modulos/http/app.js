// Importa o módulo HTTP nativo do Node.js
const http = require('http');
// Cria um servidor HTTP
http.createServer((req, res) => {
    // Define o cabeçalho da resposta HTTP com status 200 e tipo de conteúdo texto simples
    res.writeHead(200, {'Content-type': 'text/plain'});
    // Envia a resposta "hello world" e finaliza a conexão
    res.end('ola, munda ');
    
// O servidor escuta na porta 8080
}).listen(8080);