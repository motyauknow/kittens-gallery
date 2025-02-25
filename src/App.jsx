import Navbar from "./components/Navbar/Navbar";
import TagSelector from "./components/TagSelector/TagSelector";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import styles from "../src/App.module.css";
import { useState } from "react";

const App = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (tag) => {
        setSelectedTags((prevSelectedTags) => {
            if (prevSelectedTags.includes(tag)) {
                return prevSelectedTags.filter((t) => t !== tag);
            }
            else {
                return [...prevSelectedTags, tag];
            }
        })
    };


    return (
        <>
            <div className={ styles.app }>
                <Navbar/>
                <TagSelector handleTagChange={handleTagChange}/>
                <ImageGallery selectedTags={selectedTags}/>
            </div>
        </>
    )
}

export default App;