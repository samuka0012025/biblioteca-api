const express = require('express');
const router = express.Router();

const livros = [];

// 1ª Rota — GET
router.get('/', (req, res) => {
    res.json(livros);
});

// 2ª Rota — POST
router.post('/', (req, res) => {
    const id = livros.length + 1;
    const { titulo, autor, genero, paginas, disponivel } = req.body;
    const novoLivro = {
        id: id,
        titulo: titulo,
        autor: autor,
        genero: genero,
        paginas: paginas,
        disponivel: disponivel
    };
    
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

// 3ª Rota — PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, autor, genero, paginas, disponivel } = req.body;
    const indice = livros.findIndex(livro => livro.id === Number(id));

    if (indice === -1) {
        return res.status(404);
    }

    livros[indice] = {
        id: Number(id),
        titulo,
        autor,
        genero,
        paginas,
        disponivel
    };

    res.json(livros[indice]);
});

// 4ª Rota — DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const indice = livros.findIndex(livro => livro.id === Number(id));

    if (indice === -1) {
        return res.status(404);
    };

    livros.splice(indice, 1);

    res.status(204).send();
});

module.exports = router;
