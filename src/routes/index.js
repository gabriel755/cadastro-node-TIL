import express from "express";
import cadastro from "./cadastroRoutes.js";

const  routes = (app) => {
    app.get("/", (req,res) => {
        res.status(200).send("Bem vindo ao cadastro de clientes!")
    });
    app.use(
        express.json(),
        cadastro
    )
}

export default routes;
