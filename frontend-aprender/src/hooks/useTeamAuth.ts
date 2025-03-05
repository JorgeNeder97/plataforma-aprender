import { useEffect, useState } from 'react';
import axiosJWT from '#services/axios.ts';
import { useAppSelector } from '../app/hooks';
import { teamRefreshToken } from '#services/userServices.ts';

export const useTeamAuth = (accessToken: string) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const verifyTeamToken = async () => {
            try {
                // Por que dice team refresh token? yo quiero verificar el token no refrescarlo.
                const response = await teamRefreshToken(accessToken);
                if(response.status == 200) setIsAuthenticated(true);
                else setIsAuthenticated(false);
            } catch (error) {
                setIsAuthenticated(false);
            }
        }

        verifyTeamToken();
    }, []);

    return isAuthenticated;
}