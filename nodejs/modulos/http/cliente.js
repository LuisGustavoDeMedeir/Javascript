const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    // uma pedaço de dado foi recebido
    res.on('data', (chunk) => {
        data += chunk;
    });

    // a resposta inteira foi recebida. imprime o resultado
    res.on('end', () => {
        console.log(data);
    });

}).on('error', (err) => {
    console.error('Erro: ' + err.message);
});  