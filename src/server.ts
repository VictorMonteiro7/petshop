import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes";

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
server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.send("Página não encontrada");
});

// Rodando servidor
server.listen(process.env.PORT);
