import app from "./src/app.js";

const port = process.env.PORT || 9000;
app.listen(port, (err) => {
    if(err){
        console.log(`Não foi possivel iniciar o servidor no endereço http://localhost:${port}!`);
    }else{
        console.log(`Servidor iniciado no endereço http://localhost:${port}`);
    }
})