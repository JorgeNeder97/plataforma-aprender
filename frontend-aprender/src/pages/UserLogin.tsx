import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import LogoGrande from '#assets/Logo-Grande.png';


const UserLogin = () => {

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
    };

    return (
        <section className="bg-primary min-h-[100vh] flex flex-col place-items-center place-content-center gap-[100px] font-default">

            {/* Volver Atras Btn */}
            <div className="absolute top-10 right-15 text-bg">
                {/* Aqui va el boton volver atras (Componente) */}
                <p>Volver</p>
            </div>
            
            {/* Logo */}
            <Link to="/">
                <figure className="flex place-content-center lg:gap-[20px]">
                    <img className="lg:w-[150px]" src={LogoGrande} alt="" />
                    <figcaption className="flex flex-col place-content-center place-items-start lg:gap-[10px] text-bg font-semibold lg:text-title-lg">
                        <p>PLATAFORMA</p>
                        <p>APRENDER</p>
                    </figcaption>
                </figure>
            </Link>

            {/* Formulario */}
            <form action="" className="flex flex-col gap-[30px] lg:w-[220px]">

                {/* Usuario */}
                <div className="flex flex-col gap-[1px]">
                    <label htmlFor="user" className="text-bg" >Usuario</label>
                    <input className="bg-bg w-full lg:h-[30px] rounded-[5px] outline-none border-none pl-[5px]" type="text" />
                    <span className="text-paragraph-size text-tertiary">This may contain an error</span>
                </div>

                {/* Contraseña */}
                <div className="flex flex-col gap-[1px]">
                    <label htmlFor="password" className="text-bg" >Contraseña</label>
                    <input className="bg-bg w-full lg:h-[30px] rounded-[5px] outline-none border-none pl-[5px]" type="password" />
                    <span className="text-paragraph-size text-tertiary">This one too</span>
                </div>

                {/* Enviar Btn */}
                <div className="flex flex-col place-items-center gap-[20px] translate-y-[20px]">
                    <button className="bg-accent text-bg w-full lg:py-[10px] lg:rounded-[5px] hover:cursor-pointer hover:bg-accent-hover transition-all duration-[.3s] ease-in-out" onClick={handleSubmit}>Iniciar Sesión</button>
                    <a href="" className="text-bg-alter hover:text-bg underline lg:text-paragraph-size transition-all duration-[.2s] ease-in-out">¿Olvidaste tu Usuario/Contraseña?</a>
                </div>

            </form>

        </section>
    );
};

export default UserLogin;
