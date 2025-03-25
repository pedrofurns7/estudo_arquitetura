import RegistrarProduto from "@/core/produto/service/RegistrarProduto"
import { Express } from "express"

export default class RegistrarProdutoController{
    constructor(servidor: Express, casoDeUso: RegistrarProduto){
        servidor.post("/api/produtos/registrar", async(req, res) =>{
            try{
                await casoDeUso.executar({
                    nome: req.body.nome,
                    preco: req.body.preco
                })

                res.status(201).send()
            } catch (erro: any) {
                res.status(400).send(erro.message)
              }
        })
    }
}