import TopSection from "./TopSection";
import Sidebar from "./Sidebar";

const Home = ({isOpened, flagHandle}) => {
    return (
        <>
            <TopSection flagHandle={flagHandle} />
            <Sidebar isOpened={isOpened} flagHandle={flagHandle} />
        </>
    );
};

export default Home;
