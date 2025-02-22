import styles from '../PictureCard/PictureCard.module.css'
import { useState } from 'react';

const PictureCard = ({ pic, title }) => {
    const [fav, setFav] = useState(false);

    const handleClick = () => {
        setFav(!fav);
    }
    return (
        <div className={ styles.pic }>
            <img src={pic}
                 alt="Картинка"
            />
            <h3>{title}</h3>
            <button onClick={handleClick}>{fav ? 'true' : 'false'}</button>
            <p></p>
        </div>
    )
};

export default PictureCard;