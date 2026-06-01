const express = require('express');
const router = require('./routes/livros')
const app = express();
const port = 3000;

app.use(express.json());
app.use('/livros', router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})