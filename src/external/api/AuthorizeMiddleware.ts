import { Request, Response, NextFunction } from 'express';

export const authorize = (allowedRoles: string[]) =>{
    return  (req: Request, res: Response, next: NextFunction) => {
        const usuario = (req as any).usuario;
        const acessoNegado = () => res.status(403).send("Acesso negado")

        if(!usuario || !allowedRoles.includes(usuario.role)){
            acessoNegado()
            return
        }

        next();
    }
}