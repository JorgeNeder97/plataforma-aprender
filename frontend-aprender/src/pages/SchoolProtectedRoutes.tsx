import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const SchoolProtectedRoute: React.FC = () => {

    // This gets the status and detects whether the user is authenticated or not
    const isAuthenticated = useAppSelector(state => state.schoolUsers.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/schoolLogin" replace />;
};

export default SchoolProtectedRoute;