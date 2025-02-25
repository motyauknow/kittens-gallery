import styles from './PictureCard.module.css'
import { useState } from 'react';

const PictureCard = ({ pic, title, tags }) => {
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
            {tags.map((tag) => (
                <a href='#!' className={styles.tag} key={ tag }>{tag}</a>
            ))}
        </div>
    )
};

export default PictureCard;