import { Request, Response, NextFunction } from "express"
import ProvedorJwt from "./ProvedorJwt"
import Usuario from "@/core/usuario/model/Usuario"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario"

export default function UsuarioMiddleware(repositorio: RepositorioUsuario) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const acessoNegado = () => res.status(403).send("Token inválido")
    const token = req.headers.authorization?.replace("Bearer ", "")

    if (!token) {
      acessoNegado()
      return
    }

    const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET!)

    let usuarioToken: Usuario

    try {
      usuarioToken = provedorJwt.obter(token) as Usuario
    } catch (error) {
      console.log("Erro ao decodificar", error)
      acessoNegado()
      return
    }

    const usuario = await repositorio.buscarPorEmail(usuarioToken.email)

    if (!usuario) {
      acessoNegado()
      return
    }

    next()
  }
}
