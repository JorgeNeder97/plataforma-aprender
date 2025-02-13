import { Hero } from '#components/Hero.tsx';
import { Nav } from '#components/Nav.tsx';
import { NavMobile } from '#components/NavMobile.tsx';

export const Home = () => {
    return (
        <>
            <header>
                <Nav />
                <NavMobile />
            </header>
            <main>
                <Hero />
            </main>
        </>
    );
};
