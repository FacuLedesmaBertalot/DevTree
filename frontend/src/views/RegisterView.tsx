import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios, { isAxiosError } from "axios";
import type { RegisterForm } from '../types';
import ErrorMessage from "../components/ErrorMessage";


export default function RegisterView() {

    const initialValues: RegisterForm = {
        name: '',
        email: '',
        handle: '',
        password: '',
        password_confirmation: ''
    }

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

    const password = watch('password');

    const handleRegister = async (formData : RegisterForm) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData);
            console.log(data);

            reset();
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                console.log(error.response.data.error);
            }
        }
    }

    return (
        <>
            <h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>

            <form 
                onSubmit={handleSubmit(handleRegister)}
                className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-700">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu Nombre"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('name', {
                            required: "El Nombre es Obligatorio"
                        })}
                    />
                    { errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage> }

                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email" className="text-2xl text-slate-700">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: "El Email es Obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Email no Válido",
                            },
                        })}
                    />
                    { errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage> }
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="handle" className="text-2xl text-slate-700">Handle</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('handle', {
                            required: "El Handle es Obligatorio"
                        })}
                    />
                    { errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage> }
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password" className="text-2xl text-slate-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password', {
                            required: "La Contraseña es Obligatoria",
                            minLength: {
                                value: 8,
                                message: "La Contraseña debe ser Mínimo 8 Caracteres"
                            }
                        })}
                    />
                    { errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage> }
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-700">Repetir Password</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            required: "Repetir Contraseña es Obligatorio",
                            validate: (value) => value === password || 'Las Contraseñas no Coinciden'
                        })}
                    />
                    { errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage> }
                </div>

                <input
                    type="submit"
                    className="bg-blue-800 p-3 text-lg w-full uppercase text-white rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />  
            </form>
        
            <nav className="mt-10">
                <Link 
                className="text-center text-white text-lg block"
                to="/auth/login" 
                >
                    ¿Ya tienes Cuenta? Inicia Sesión
                </Link>
            </nav>
        </>
    )
}
