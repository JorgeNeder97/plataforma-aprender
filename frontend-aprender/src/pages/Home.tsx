import Hero from '#components/Hero.tsx';
import Ingreso from '#components/Ingreso.tsx';
import Nav from '#components/Nav.tsx';
import NavMobile from '#components/NavMobile.tsx';
import Operativos from '#components/Operativos.tsx';

const Home = () => {
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