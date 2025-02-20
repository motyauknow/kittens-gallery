import Navbar from "./components/Navbar/Navbar";
import PictureCard from "./components/PictureCard/PictureCard";
import styles from "../src/App.module.css";

const App = () => {
    return (
        <>
            <div className={ styles.app }>
                <Navbar/>
                <PictureCard title='Я люблю карину'/>
            </div>
        </>
    )
}

export default App;