import type { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import slug from 'slug';
import User from "../models/User";
import { checkPassword, hashPassword } from '../utils/auth';
import { generateJWT } from '../utils/jwt';


export const createAccount = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error('Un Usuario con ese Email ya está Registrado');
        return res.status(409).json({ error : error.message });
    }

    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        const error = new Error('Nombre de Usuario no Disponible');
        return res.status(409).json({ error : error.message });
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;



    await user.save();
    res.status(201).send('Registro Creado Correctamente');
}


export const login = async (req: Request, res: Response) => {
    
    // Manejar errores
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Revisa si el usuario esta registrado
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error('El Usuario no Existe');
        return res.status(404).json({ error : error.message });
    }

    // Comprobar contraseña
    const isPasswordCorrect = await checkPassword(password, user.password); 
    if (!isPasswordCorrect) {
        const error = new Error('La Contraseña es Incorrecta');
        return res.status(401).json({ error : error.message });
    }

    const token = generateJWT({ id: user._id });

    res.send(token);
}


export const getUser = async (req: Request, res: Response) => {
    res.json(req.user);
}