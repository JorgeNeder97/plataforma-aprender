import Logo from '#assets/Logo.png';

export const Nav = () => {
    return (
        <nav className="hidden bg-accent w-screen h-[60px] lg:flex place-content-between place-items-center font-default">
            <figure className="flex gap-[15px] pl-[40px] place-items-center">
                <img src={Logo} className="max-w-[50px]" alt="Equipo Aprender - Logo" />
                <h2 className="text-bg font-extrabold text-[24px]">PLATAFORMA APRENDER</h2>
            </figure>
            <ul className="w-[50%] flex gap-[25px] pr-[40px] place-content-end">
                <li><a className="nav-link" href="#operativos">Operativos 2025</a></li>
                <li><a className="nav-link" href="#sobreNosotros">Sobre Nosotros</a></li>
                <li><a className="nav-link" href="#contactanos">Contactanos</a></li>
                <li><a className="nav-link" href="#ingresa">Ingresá</a></li>
            </ul>
        </nav>
    );
};
