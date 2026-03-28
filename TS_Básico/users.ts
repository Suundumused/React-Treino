import type { Request, Response } from 'express';


interface UserData {
    nome: string;
    email: string;
    idade?: number; // ? - indica que o campo é opcional.
}

const users = [
    { id: 1, nome: "Alice", email: "alice@ts.com", idade: 28},
    { id: 2, nome: "Bob", email: "bob@ts.com"}
]

export const getAllUsers = (req: Request, res: Response): void => {
    res.status(200).json(users);
};

export const createUser = (req: Request, res: Response): void => {
    res.status(200).json({"message": "ok"});
};

export const findUserById = (req: Request, res: Response): void => {
    res.status(200).json({"message": "ok"});
};