import Navbar from "./components/Navbar/Navbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import styles from "../src/App.module.css";

const App = () => {
    return (
        <>
            <div className={ styles.app }>
                <Navbar/>
                <ImageGallery/>
            </div>
        </>
    )
}

export default App;