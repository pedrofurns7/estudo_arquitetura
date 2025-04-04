import Produto from "@/core/produto/model/Produto";
import db from "./db";

export default class RepositorioProdutoPg{
    private static readonly items: Produto[] = [];


    async inserir(produto: Produto){
        await db.query(`
            insert into produtos
            (id, nome, preco)
            values ($1, $2, $3)`,
            [
                produto.id,
                produto.nome,
                produto.preco,
            ]
        )
    }

    async buscarPorNome(nome: string): Promise<Produto | null>{
        const produto = await db.oneOrNone(
            'select * from produtos where nome = $1',
            [nome]
        )
        if(!produto ) return null
        return produto 
    }
}