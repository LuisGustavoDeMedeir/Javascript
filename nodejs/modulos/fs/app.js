const fs = require('fs');

fs.readFile('example.txt', 'utf8',(erro, conteudo_do_arquivo) => {
    if (erro) {
        console.error('erro ao ler o arquivo:', erro);
        return;
    }
    console.log('Contéudo do arquivo', conteudo_do_arquivo);
});

console.log('Esta mensagem aparece primeiro.');