const criancas = require('../model/criancas.model');

// Listar Todas
exports.getTodasCriancas = (req, res) => {
    res.json(criancas);
};

// Buscar por ID
exports.getCriancasPorId = (req, res) => {
    const id = parseInt (req.params.id);
    const crianca = criancas.find(c => c.id === id);

    if (!crianca) return res.status(404).json({ mensagem: 'criança não encontrada.'});

    res.json(crianca);
};

//Estátiticas simples
exports.getEstatistica = (req, res) => {
    const total = criancas.length;
    const mediaIdade = criancas.reduce((acc, c) => acc + c.idade, 0) / total;

    res.json({ totalDesaparecidas: total, idadeMedia: mediaIdade.toFixed(1)});

};