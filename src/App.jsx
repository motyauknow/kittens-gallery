import Navbar from "./components/Navbar/Navbar";
import TagSelector from "./components/TagSelector/TagSelector";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import styles from "../src/App.module.css";
import { useState } from "react";

const App = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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
                <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <TagSelector handleTagChange={handleTagChange}/>
                <ImageGallery selectedTags={selectedTags} searchQuery={searchQuery}/>
            </div>
        </>
    )
}

export default App;