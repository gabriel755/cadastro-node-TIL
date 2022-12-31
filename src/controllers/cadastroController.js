import cadastro from "../models/Cadastro.js";

class cadastroController {
    static listarCadastro = (req,res) => {
        cadastro.find((err, cadastro) => {
            res.status(200).json(cadastro);
        })
    }
    static criarCadastro = (req,res) => {
        let criar = new cadastro(req.body)
        criar.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Não foi possivel criar o cadastro.`})
            }else{
                res.status(201).send(criar.toJSON());
            }
        })
    }
    static updateCadastro = (req,res) => {
        const id = req.params.id;
        cadastro.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(201).send({message: `O cadastro ${id} foi alterado com sucesso!`});
            }else{
                res.status(500).send({message: `Não foi possível alterar o cadastro ${id}!`});
            }
        })
    }
    static excluirCadastro = (req,res) =>{
        const id = req.params.id;
        cadastro.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(201).send({message: `O cadastro ${id} foi excluído com sucesso.`});
            }else{
                res.status(500).send({message: `${err.message}`});
            }
        })
    }
    static buscarCadastro = (req,res) => {
        const id = req.params.id;
        cadastro.findById(id, (err, cadastro) => {
            if(err){
                res.status(500).send({message: `${err.message} - O cadastro não foi localizado.`});
            }else{
                res.status(200).send(cadastro)
            }
        })
    }
}

export default cadastroController;