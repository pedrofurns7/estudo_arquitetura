import CasoDeUso from "@/core/shared/CasoDeUso"
import Produto from "../model/Produto"
import RepositorioProduto from "./RepositorioProduto"
import Id from "@/core/shared/Id"


export default class RegistrarProduto implements CasoDeUso<Produto, void> {
  constructor(private repositorio: RepositorioProduto) {}

  async executar(produto: Produto): Promise<void> {
    const novoProduto = {
      id: Id.gerarHash(),
      nome: produto.nome,
      preco: produto.preco
    }

    this.repositorio.inserir(novoProduto)
  }
}
