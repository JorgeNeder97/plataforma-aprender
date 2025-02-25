import { Routes, Route } from "react-router-dom";
import Home from "#pages/Home.tsx";
import TeamLogin from "#pages/TeamLogin.tsx";
import SchoolLogin from "#pages/SchoolLogin.tsx";

const MainApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teamLogin" element={<TeamLogin />} />
                <Route path="/userLogin" element={<SchoolLogin />} />
            </Routes>
        </>
    );
};

export default MainApp;
