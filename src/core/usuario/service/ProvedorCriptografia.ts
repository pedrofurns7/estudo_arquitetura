//na arquitetura hexagonal, está interface é uma porta!
//a parta faz parte do core da aplicação 
export default interface ProvedorCriptografia{
    criptografar(texto: string): string
    comparar(senha: string, SenhaCriptografada: string): boolean
}