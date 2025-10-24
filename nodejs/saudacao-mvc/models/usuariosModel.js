module.exports = {
    gerarMensagemLogin: (login, senha) => {
        if (login === 'Joédio' && senha === '123456') {
            acesso = 'liberado';
        } else {
            acesso = 'negado';
        }
        return `Olá, ${login}! Seu acesso foi  ${acesso}.`;
    }
};