import Navbar from "./components/Navbar/Navbar";
import Selector from "./components/Selector/Selector";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import styles from "../src/App.module.css";

const App = () => {
    return (
        <>
            <div className={ styles.app }>
                <Navbar/>
                <Selector/>
                <ImageGallery/>
            </div>
        </>
    )
}

export default App;