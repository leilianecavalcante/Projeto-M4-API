# Projeto-M4-API

<h1 align="center">🧒 API de Crianças Desaparecidas</h1>

<p align="center">
  Este projeto é uma API que disponibiliza informações sobre crianças desaparecidas no Brasil, promovendo conscientização e utilidade social.
</p>

<hr/>

<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Node.js</strong> - Ambiente de execução JavaScript</li>
  <li><strong>Express.js</strong> - Framework para criação de APIs</li>
  <li><strong>JSON</strong> - Formato das respostas da API</li>
</ul>

<h2>📌 Funcionalidades da API</h2>
<ol>
  <li><strong>Listar todas as crianças desaparecidas</strong> - <code>GET /criancas</code></li>
  <li><strong>Buscar uma criança por ID</strong> - <code>GET /criancas/:id</code></li>
  <li><strong>Exibir estatísticas</strong> - <code>GET /criancas/estatisticas/info</code></li>
</ol>

<h2>📁 Estrutura de Pastas</h2>

<pre>
/desaparecidos-api
├── node_modules/
├── src/
│   ├── controller/
│   │   └── crianca.controller.js
│   ├── model/
│   │   └── criancas.model.js
│   ├── routes/
│   │   └── crianca.routes.js
│   └── server.js
├── package.json
├── package-lock.json
└── README.md
</pre>

<h2>📦 Como Rodar o Projeto</h2>

<ol>
  <li>Clone o repositório:
    <pre>git clone https://github.com/leilianecavalcante/Projeto-M4-API.git
  </li>
  <li>Entre na pasta:
    <pre>cd Projeto-M4-API</pre>
  </li>
  <li>Instale as dependências:
    <pre>npm install</pre>
  </li>
  <li>Inicie o servidor:
    <pre>npm start</pre>
    ou
    <pre>node src/server.js</pre>
  </li>
</ol>

<h3>✔ A API estará disponível em:</h3>
<ul>
  <li><code>http://localhost:3000/criancas</code></li>
  <li><code>http://localhost:3000/criancas/1</code></li>
  <li><code>http://localhost:3000/criancas/estatisticas/info</code></li>
</ul>

<h2>🧪 Exemplo de Resposta</h2>

<h3>1. Listar Todas:</h3>
<pre>
GET /criancas

[
  {
    "id": 1,
    "nome": "Maria Luiza",
    "idade": 8,
    "cidade": "São Paulo",
    "desaparecidaDesde": "2024-05-12"
  },
  ...
]
</pre>

<h3>2. Buscar por ID:</h3>
<pre>
GET /criancas/1

{
  "id": 1,
  "nome": "Maria Luiza",
  "idade": 8,
  "cidade": "São Paulo",
  "desaparecidaDesde": "2024-05-12"
}
</pre>

<h3>3. Estatísticas:</h3>
<pre>
GET /criancas/estatisticas/info

{
  "totalDesaparecidas": 3,
  "idadeMedia": "8.3"
}
</pre>

<h2>🤝 Contribuindo</h2>

<p>Contribuições são bem-vindas! Para contribuir:</p>
<ol>
  <li>Dê fork no projeto</li>
  <li>Crie uma branch (<code>git checkout -b minha-feature</code>)</li>
  <li>Faça suas alterações e commit (<code>git commit -m "Minha feature"</code>)</li>
  <li>Dê push (<code>git push origin minha-feature</code>)</li>
  <li>Abra uma Pull Request</li>
</ol>

<h2>📄 Licença</h2>

<p>Este projeto está licenciado sob os termos da <strong>MIT License</strong>.</p>
