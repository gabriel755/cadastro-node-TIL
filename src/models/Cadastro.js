import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, required: true}

});

const cadastro = mongoose.model('cadastro', cadastroSchema);
export default cadastro;