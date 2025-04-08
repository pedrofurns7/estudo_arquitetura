import Usuario from "@/core/usuario/model/Usuario"
import db from "./db"

export default class RepositorioUsuarioPg{
    
    private static readonly items: Usuario[] = []
    
    async inserir(usuario: Usuario){
       await db.query(`
        insert into usuarios
        (id, nome, email, senha, role)
        values ($1, $2, $3, $4, $5)`,
        [
            usuario.id,
            usuario.nome,
            usuario.email,
            usuario.senha,
            usuario.role
        ]
    )
    }

    async buscarPorEmail(email: string): Promise<Usuario | null>{
        const usuario = await db.oneOrNone(
            'select * from usuarios where email = $1',
            [email]
        )
        if(!usuario ) return null
        return usuario 
    }
}