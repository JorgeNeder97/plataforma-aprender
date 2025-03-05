import { Link, Navigate, useNavigate } from 'react-router-dom';
import LogoGrande from '#assets/Logo-Grande.png';
import { useForm } from 'react-hook-form';
import { TeamUser } from '#models/usuarios.ts';
import { useAppDispatch, useAppSelector } from '#hook';
import { loginTeamUser } from '../features/users/TeamUserSlice';
import { teamLoginRequest } from '#services/userServices.ts';
import { useState } from 'react';

const TeamLogin = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [errorsBack, setErrorsBack] = useState();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.teamUsers);

    // handle submit
    const onSubmit = handleSubmit(async data => {

        // Create de user
        const teamUser: TeamUser = {
            teamUser: data.teamUser,
            teamPassword: data.teamPassword,
        };
        
        // Send it to Login Route
        const response = await teamLoginRequest(teamUser);

        // Set the user in Redux
        dispatch(loginTeamUser(response));

        // Send the user to the TeamHome page
        navigate("/teamHome");
    });

    if(user.isAuthenticated) return <Navigate to="/teamHome" replace />;
    else return (
        <section className="bg-primary min-h-[100vh] flex flex-col place-items-center place-content-center gap-[100px] font-default">

            {/* Volver Atras Btn */}
            <div className="absolute top-5 right-5 lg:top-10 lg:right-15 text-bg">
                {/* Aqui va el boton volver atras (Componente) */}
                <p>Volver</p>
            </div>
            
            {/* Logo */}
            <Link to="/">
                <figure className="flex place-content-center gap-[15px] lg:gap-[20px]">
                    <img className="w-[100px] lg:w-[150px]" src={LogoGrande} alt="" />
                    <figcaption className="flex flex-col place-content-center place-items-start gap-[8px] lg:gap-[10px] text-bg font-semibold text-title lg:text-title-lg">
                        <p>PLATAFORMA</p>
                        <p>APRENDER</p>
                    </figcaption>
                </figure>
            </Link>

            {/* Formulario */}
            <form action="" className="flex flex-col gap-[30px] w-[200px] lg:w-[220px]">

                {/* Usuario */}
                <div className="flex flex-col gap-[1px]">
                    <label htmlFor="user" className="text-bg font-medium" >Usuario</label>
                    <input 
                        className="bg-bg w-full h-[30px] rounded-[5px] outline-none border-none pl-[5px]" 
                        type="text" 
                        {...register("teamUser", {
                            required: {
                                value: true,
                                message: 'Debes ingresar tu usuario',
                            }
                        })}
                    />
                    <span className={`text-paragraph-size text-tertiary ${errors && errors.data}`}>This may contain an error</span>
                </div>

                {/* Contraseña */}
                <div className="flex flex-col gap-[1px]">
                    <label htmlFor="password" className="text-bg font-medium" >Contraseña</label>
                    <input 
                        className="bg-bg w-full h-[30px] rounded-[5px] outline-none border-none pl-[5px]" 
                        type="password" 
                        {...register("teamPassword", {
                            required: {
                                value: true,
                                message: 'Debes ingresar tu contraseña',
                            }
                        })}
                    />
                    <span className="text-paragraph-size text-tertiary">This one too</span>
                </div>

                {/* Enviar Btn */}
                <div className="flex flex-col place-items-center gap-[20px] translate-y-[20px]">
                    <button className="bg-accent text-bg font-medium w-full py-[10px] rounded-[5px] hover:cursor-pointer hover:bg-accent-hover transition-all duration-[.3s] ease-in-out" onClick={onSubmit}>Iniciar Sesión</button>
                    <a href="" className="text-bg-alter hover:text-bg underline text-[11px] lg:text-paragraph-size transition-all duration-[.2s] ease-in-out">¿Olvidaste tu Usuario/Contraseña?</a>
                </div>

            </form>

        </section>
    );
};

export default TeamLogin;
