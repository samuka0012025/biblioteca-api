# 📚 Biblioteca API

API REST desenvolvida com Node.js e Express para gerenciamento de livros.

## 🚀 Tecnologias

- Node.js
- Express

## 📋 Pré-requisitos

- Node.js instalado
- npm instalado

## ⚙️ Como rodar o projeto

Clone o repositório:
\```
git clone <https://github.com/SEU_USUARIO/biblioteca-api.git>
\```

Instale as dependências:
\```
npm install
\```

Inicie o servidor:
\```
node server.js
\```

O servidor vai rodar em `http://localhost:3000`

## 🔗 Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | /livros | Lista todos os livros |
| POST | /livros | Cadastra um novo livro |
| PUT | /livros/:id | Atualiza um livro pelo id |
| DELETE | /livros/:id | Remove um livro pelo id |

## 📦 Exemplo de body

\```json
{
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "genero": "Fantasia",
    "paginas": 1200,
    "disponivel": true
}
\```
