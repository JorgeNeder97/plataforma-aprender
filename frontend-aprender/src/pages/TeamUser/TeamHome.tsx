import { obEsc } from "#services/userServices.ts";
import { useEffect, useState } from "react";
import { store } from '#store';

const TeamHome = () => {

    const [escuelas, setEscuelas ] = useState<any[]>([]);

    useEffect(() => {
        console.log(escuelas);
    }, [escuelas])

    const handleClick = async () => {
        const response = await obEsc();
        setEscuelas(response);
    }
    console.log(store.getState().teamUsers);


    return (
        <div>
            <h3>This route is protected</h3>
            <br></br>
            <button onClick={handleClick}>Escuelas</button>
        </div>
    );
};

export default TeamHome;
