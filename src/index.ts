import dotenv from 'dotenv'
dotenv.config()

import UsuarioMiddleware from './external/api/UsuarioMiddleware'
import SenhaCripto from './external/auth/SenhaCripto'
import RepositorioUsuarioPg from './external/database/RepositorioUsuarioPg'
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'
import ObterProdutoPorIdController from './external/api/ObterProdutoPorIdController'
import ObterProdutoPorId from './core/produto/service/ObterProdutoPorId'
import LoginUsuarioController from './external/api/LoginUsuarioController'
import LoginUsuario from './core/usuario/service/LoginUsuario'
import express from 'express'

const app = express()
const porta = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(porta, () =>{
    console.log(`🔥 servidor executando na porta ${porta}`)
})

//rotas abertas

const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new SenhaCripto()

const registrarUsuario = new RegistrarUsuario(
    repositorioUsuario,
    provedorCripto
)


const loginUsuario = new LoginUsuario(
    repositorioUsuario,
    provedorCripto
)

new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)

const usuarioMid = UsuarioMiddleware(repositorioUsuario)

const obterProdutoPorId = new ObterProdutoPorId()
new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMid)
