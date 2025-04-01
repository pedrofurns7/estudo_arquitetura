import CasoDeUso from "@/core/shared/CasoDeUso"
import Produto from "../model/Produto"
import RepositorioProduto from "./RepositorioProduto"

export default class ObterProdutoPorNome implements CasoDeUso<string, Produto> {
  constructor(private repositorio: RepositorioProduto) {}
  async executar(nome: string): Promise<Produto> {
    const produto = await this.repositorio.buscarPorNome(nome)
    if (!produto) throw new Error("Produto não encontrado")
    return produto
  }
}
