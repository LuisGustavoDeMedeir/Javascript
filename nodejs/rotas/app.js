//Importando o módulo http nativo do Node.js
import http from 'http';
// Definindo a porta do servidor

const Port = 3000;
//Criando o servidor
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // Definindo o cabeçalho da resposta como HTML
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    //roteamento básico
    if (url === '/') {
        res.statusCode = 200;// OK
        res.end('<h1>Bem-vindo à página inicial!</h1>');
    } else if (url === '/sobre' && method === 'GET') {
        res.statusCode = 200;// OK
        res.end(
            '<h1>Sobre nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>'
        );
    } else if (url === '/contato') {
        res.statusCode = 200;// OK
        res.end('<h1>Fale com a gente</h1><p>Email:</p>');
    } else if (url === '/fotos') {
        res.statusCode = 200;// OK
        res.end('<h1>Fotos</h1>');
    } else if (url === '/imagens') {
        res.statusCode = 200;// OK
        res.end('<h1>Imagens</h1>');
    } else {
        //se nenhuma rota for correspondida
        res.statusCode = 404;// Not Found
        res.end('<h1>404 - Página não encontrada</h1>');
    }

});
// iniciando o servidor para ouvir na porta definida
server.listen(Port, () => {
    console.log(`Servidor rodando em http://localhost:${Port}`);
});