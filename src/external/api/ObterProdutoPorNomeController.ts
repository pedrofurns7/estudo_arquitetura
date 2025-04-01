import { Express } from "express"

import ObterProdutoPorNome from "@/core/produto/service/ObterProdutoPorNome"

export default class ObterProdutoPorIdController {
  constructor(
    servidor: Express,
    casoDeUso: ObterProdutoPorNome,
    middleware: any
  ) {
    servidor.post("/api/produtos/", middleware, async (req, res) => {
      try {
        const produto = await casoDeUso.executar(
          req.body.nome
        )        
        res.status(200).send(produto)

      } catch (erro: any) {
        res.status(400).send(erro.message)
      }
    })
  }
}
