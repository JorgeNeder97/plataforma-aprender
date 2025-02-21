import { Routes, Route } from "react-router-dom";
import Home from "#pages/Home.tsx";
import TeamLogin from "#pages/TeamLogin.tsx";
import UserLogin from "#pages/UserLogin.tsx";

const MainApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teamLogin" element={<TeamLogin />} />
                <Route path="/userLogin" element={<UserLogin />} />
            </Routes>
        </>
    );
};

export default MainApp;
