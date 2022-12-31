import express from "express";
import cadastroController from "../controllers/cadastroController.js"

const router = express.Router();

router
    .get("/cadastro", cadastroController.listarCadastro)
    .post("/cadastro", cadastroController.criarCadastro)
    .put("/cadastro/:id", cadastroController.updateCadastro)
    .delete("/cadastro/:id", cadastroController.excluirCadastro)
    .get("/cadastro/:id", cadastroController.buscarCadastro)

export default router;