const express = require('express');
const app = express();
const criancaRoutes = require('./routes/crianca.routes');

app.use(express.json());

//Usando as Rotas de crianças desaparecidas
app.use('/criancas', criancaRoutes);

//Porta onde o servidor vi rodar
const PORT = 3000;
app.listen(PORT,()=> {
    console.log(`servidor rodando na porta ${PORT}`);
});