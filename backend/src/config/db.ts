import colors from "colors";
import mongoose from "mongoose";
import User, {IUser} from "../models/User";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            family: 4, // Obliga a Node.js a usar IPv4 (evita el choque de red)
            serverSelectionTimeoutMS: 5000 // Corta a los 5 segundos si falla para mostrarnos el error
        });
        
        const url = `${connection.host}:${connection.port}`;

        console.log( colors.bgCyan.bold( `MongoDB Conectado en ${url}` ));
    } catch (error) {
        console.log( colors.bgRed.bold(`Error de conexión: ${error.message}`) );
        process.exit(1);
    }
}