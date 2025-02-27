import { Routes, Route } from "react-router-dom";
import Home from "#pages/Home.tsx";
import TeamLogin from "#pages/TeamLogin.tsx";
import SchoolLogin from "#pages/SchoolLogin.tsx";
import TeamProtectedRoute from '#pages/TeamProtectedRoute.tsx';
import TeamHome from "#pages/TeamUser/TeamHome.tsx";


const MainApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teamLogin" element={<TeamLogin />} />
                <Route path="/userLogin" element={<SchoolLogin />} />

                {/* Team Protected Routes */}
                <Route element={<TeamProtectedRoute />}>
                    <Route path="/teamHome" element={<TeamHome />} />
                </Route>
            </Routes>
        </>
    );
};

export default MainApp;
