import { Navigate, Outlet } from 'react-router-dom';
import { useTeamAuth } from '#hooks/useTeamAuth.ts';
import { useAppSelector } from '#hook';

const TeamProtectedRoute: React.FC = () => {

    // This gets the status and detects whether the user is authenticated or not
    const user = useAppSelector(state => state.teamUsers);

    console.log(user);
    

    return user.isAuthenticated ? <Outlet /> : <Navigate to="/teamLogin" replace />;
};

export default TeamProtectedRoute;