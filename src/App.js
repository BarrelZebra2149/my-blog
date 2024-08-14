import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import FoodSection from "./components/FoodSection";
import WelcomeSection from "./components/WelcomeSection";

const App = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleFlagChange = (flag) => {
        setIsOpened(flag);
    };

    return (
        <BrowserRouter>
            <Home isOpened={isOpened} flagHandle={handleFlagChange} />
            <Routes>
                <Route index element={<WelcomeSection />}/>
                <Route path="/about" element={<AboutSection />} />
                <Route path="/food" element={<FoodSection />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
