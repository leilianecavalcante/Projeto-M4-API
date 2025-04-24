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
  <h3>4. Verifique os Arquivos</h3>
<p>Agora, verifique se o arquivo <code>package.json</code> está presente dentro da pasta do projeto:</p>
<pre>
  <code>ls</code>
</pre>
<p>Ou no Windows, use:</p>
<pre>
  <code>dir</code>
</pre>
<p>Você deve ver a pasta <code>desaparecidos-api</code> e o arquivo <code>package.json</code>.</p>

<h3>6. Instale as Dependências</h3>
<p>Agora, instale todas as dependências necessárias para rodar o projeto:</p>
<pre>
  <code>npm install</code>
</pre>
<p>Isso vai baixar todas as bibliotecas necessárias para a API funcionar.</p>

<h3>7. Rode a API</h3>
<p>Com as dependências instaladas, agora execute o comando:</p>
<pre>
  <code>npm start</code>
</pre>
<p>Ou, caso o comando <code>start</code> não funcione, execute diretamente:</p>
<pre>
  <code>node src/server.js</code>
</pre>
<p>A API deve agora estar rodando em <strong>http://localhost:3000</strong>.</p>

<h3>8. Acesse no Navegador</h3>
<p>Abra seu navegador e digite o seguinte endereço para acessar a API:</p>
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
