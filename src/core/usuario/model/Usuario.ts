export type UserRole = 'viewer' | 'editor';
export default interface Usuario {
    id?: string, 
    nome: string, 
    email: string,
    senha: string, 
    role: UserRole
}