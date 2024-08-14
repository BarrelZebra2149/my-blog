import TopSection from "./TopSection";
import Sidebar from "./Sidebar";
import FoodSection from "./FoodSection";
import AboutSection from "./AboutSection";
import React, {useState} from "react";

const Home = ({}) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleFlagChange = (flag) => {
        setIsOpened(flag);
    };

    return (
        <>
            <TopSection flagHandle={handleFlagChange} />
            <Sidebar isOpened={isOpened} flagHandle={handleFlagChange} />
            <FoodSection />
            <AboutSection />
        </>
    );
};

export default Home;
