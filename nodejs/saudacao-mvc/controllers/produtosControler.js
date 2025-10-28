const ProdutosController = {
    index: (req, res) => {
        // Render the produtos view
        res.render('produtos');
    },

    listarProdutos: (req, res) => {
        // Example product data (you might want to get this from a database)
        const produtos = [
            { id: 1, nome: 'Produto 1', preco: 100 },
            { id: 2, nome: 'Produto 2', preco: 200 },
            { id: 3, nome: 'Produto 3', preco: 300 }
        ];

        res.render('produtos', { produtos });
    },

    criar: (req, res) => {
        // Handle product creation
        const novoProduto = req.body;
        // Add logic to save the product
        res.redirect('/produtos');
    }
};

module.exports = ProdutosController;