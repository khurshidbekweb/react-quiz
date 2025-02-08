const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/questions.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
npm install -g vercel
