import Logo from "#assets/Logo-Grande.png";

export const Hero = () => {
    return (
        <div className="flex">
            <section className="w-[40%] flex flex-col place-items-center">
                <h3>Bienvenido a Nuestra Plataforma</h3>
                <p>
                    En esta plataforma, podrás cargar y gestionar toda la
                    información necesaria de manera rápida y sencilla. Tu
                    colaboración es clave para garantizar el éxito de nuestros
                    operativos educativos.
                </p>
                <p>¡Gracias por ser parte de este proceso!</p>
            </section>
            <figure className="w-[60%] flex place-items-center place-content-center">
                <img src={Logo} className="w-[400px]" alt="Equipo Aprender - Logo" />
            </figure>
        </div>
    );
};
