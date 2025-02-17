import Hero from '#components/Hero.tsx';
import Ingreso from '#components/Ingreso.tsx';
import Nav from '#components/Nav.tsx';
import NavMobile from '#components/NavMobile.tsx';
import Operativos from '#components/Operativos.tsx';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Home = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '30px',
            duration: 1000,
            opacity: 0,
            delay: 0,
            easing: 'ease',
            beforeReveal(domEl) {
                if (domEl instanceof HTMLElement) {
                    domEl.style.transform = '';
                }
            },
            reset: false,
        });

        sr.reveal('.texto', { 
            origin: 'left',
            interval: 100,
        });

        sr.reveal('.imagen', {
            origin: 'right',
            delay: 300,
        });

        sr.reveal('.titulo', {
            origin: 'bottom',
        });

        sr.reveal('.left', {
            origin: 'left',
            delay: 100,
        });

        sr.reveal('.right', {
            origin: 'right',
            delay: 100,
        });

        sr.reveal('.operativo-card', {
            origin: 'top',
            interval: 100,
            distance: '60px',
            delay: 300,
        });

        return () => {
            sr.destroy();
        };
    }, []);

    return (
        <>
            <NavMobile />
            <Nav />
            <main>
                <Hero />
                <Ingreso />
                <Operativos />
            </main>
        </>
    );
};


export default Home;