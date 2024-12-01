import React from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Home from "../pages/Home/Home";
import Level1 from "../pages/Level1/Level1";
import Level2 from "../pages/Level2/Level2";
import Level3 from "../pages/Level3/Level3";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AnimatedPage animationType="fade"><Home /></AnimatedPage>} />
            <Route path="level1" element={<AnimatedPage animationType="slide"><Level1 /></AnimatedPage>} />
            <Route path="level1/:id" element={<AnimatedPage animationType="scale"><Level2 /></AnimatedPage>} />
            <Route path="level1/:id/level2/:subId" element={<AnimatedPage animationType="fade"><Level3 /></AnimatedPage>} />
        </Routes>
    );
};

export default AppRoutes;
