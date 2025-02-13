import Logo from "#assets/Logo-Grande.png";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export const Hero = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '30px',
            duration: 2000,
            opacity: 0,
            delay: 0,
            easing: 'ease',
            reset: false,
        });

        sr.reveal('.texto', { 
            origin: 'left',
            interval: 300,
        });

        sr.reveal('.imagen', {
            origin: 'right',
        });

        return () => {
            sr.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col lg:flex-row font-default py-[20px] bg-[url('/hero-bg.png')] bg-right-top lg:bg-cover lg:bg-center lg:h-[90vh] lg:max-h-[650px]">
            <section className="w-full lg:w-[40%] px-[25px] md:pt-[50px] flex flex-col gap-[40px] md:gap-[60px] place-items-center lg:place-items-start lg:pl-[5%] lg:translate-x-[50px]">
                <h3 className="texto max-w-[400px] md:max-w-[500px] text-primary text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center lg:text-left py-[10px] md:py-0">Bienvenido a Nuestra Plataforma</h3>
                <p className="texto max-w-[340px] sm:max-w-[400px] md:max-w-[450px] sm:text-[16px] text-justify text-paragraph leading-[35px]">
                    En esta plataforma, podrás cargar y gestionar toda la
                    información necesaria de manera rápida y sencilla. Tu
                    colaboración es clave para garantizar el éxito de nuestros
                    operativos educativos.
                </p>
                <p className="texto sm:text-[18px] md:text-[20px] text-justify text-paragraph font-medium">¡Gracias por ser parte de este proceso!</p>
            </section>
            <figure className="imagen py-[40px] sm:py-[20px] lg:py-0 w-full lg:w-[60%] flex place-items-center lg:place-items-start place-content-center ">
                <img src={Logo} className="w-[200px] md:w-[300px] lg:w-[500px] lg:pt-[50px]" alt="Equipo Aprender - Logo" />
            </figure>
        </div>
    );
};
