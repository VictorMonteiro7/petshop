import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";

// Setando Dotenv
dotenv.config();

// Criando servidor
const server = express();

// Setando Engine e local da pasta de visualização
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

// Criando e apontando a pasta pública
server.use(express.static(path.join(__dirname, "../public")));

// Rotas

// Rodando servidor
server.listen(process.env.PORT);
