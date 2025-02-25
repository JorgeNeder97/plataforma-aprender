import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import LogoGrande from '#assets/Logo-Grande.png';


const SchoolLogin = () => {

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
    };

    return (
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
                    <input className="bg-bg w-full h-[30px] rounded-[5px] outline-none border-none pl-[5px]" type="text" />
                    <span className="text-paragraph-size text-tertiary">This may contain an error</span>
                </div>

                {/* Contraseña */}
                <div className="flex flex-col gap-[1px]">
                    <label htmlFor="password" className="text-bg font-medium" >Contraseña</label>
                    <input className="bg-bg w-full h-[30px] rounded-[5px] outline-none border-none pl-[5px]" type="password" />
                    <span className="text-paragraph-size text-tertiary">This one too</span>
                </div>

                {/* Enviar Btn */}
                <div className="flex flex-col place-items-center gap-[20px] translate-y-[20px]">
                    <button className="bg-accent text-bg font-medium w-full py-[10px] rounded-[5px] hover:cursor-pointer hover:bg-accent-hover transition-all duration-[.3s] ease-in-out" onClick={handleSubmit}>Iniciar Sesión</button>
                    <a href="" className="text-bg-alter hover:text-bg underline text-[11px] lg:text-paragraph-size transition-all duration-[.2s] ease-in-out">¿Olvidaste tu Usuario/Contraseña?</a>
                </div>

            </form>

        </section>
    );
};

export default SchoolLogin;
