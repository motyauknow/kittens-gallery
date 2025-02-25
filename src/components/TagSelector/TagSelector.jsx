import styles from './TagSelector.module.css'
import { useState, useRef, useEffect } from "react";
import tagsList from "../..";

const TagSelector = ({ handleTagChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialogNode = dialogRef.current;

        if (isOpen && dialogNode) {
            dialogNode.showModal();
        }
        else if (dialogNode) {
            dialogNode.close();
        }
    }, [isOpen]);

    const handleOpenDialog = () => {
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
    };



    return (
        <>
            <button onClick={handleOpenDialog}>Tags</button>

            <dialog className={ styles.dialog } ref={dialogRef}>
                {tagsList.map((tag) => (
                    <label className={ styles.checkboxBtn } key={ tag }>
                        <input 
                            type="checkbox"
                            onChange={() => handleTagChange(tag)}
                        />
                        <span>{ tag }</span>
                    </label>
                ))}
                <button className={ styles.close } onClick={handleCloseDialog}>Close</button>
            </dialog>
        </>
    );
};

export default TagSelector;