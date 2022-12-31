import express from "express";
import routes from "./routes/index.js";
import  connection  from "./config/dbConnection.js";

connection.on("error", console.log.bind(console, 'Erro de conexão'));
connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json());
routes(app);

export default app;