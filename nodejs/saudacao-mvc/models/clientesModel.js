module.exports = {
  verificarLogin: (login, senha) => {
    let acesso;

    if (login === "Apolo" && senha === "7608") {
        acesso = "Logado"
    } else {
      acesso = "Negado";
    }

    return `Olá, ${login}, seu acesso foi: ${acesso}`;
  }
};
