import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const TeamProtectedRoute: React.FC = () => {

    // This gets the status and detects whether the user is authenticated or not
    const isAuthenticated = useAppSelector(state => state.teamUsers.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/teamLogin" replace />;
};

export default TeamProtectedRoute;