import styles from './PictureCard.module.css'

const PictureCard = ({ pic, title, tags }) => {
    return (
        <div className={ styles.pic }>
            <img src={pic}
                 alt="Картинка"
            />
            <h3>{title}</h3>
            {tags.map((tag) => (
                <button className={styles.tag} key={ tag }>{tag}</button>
            ))}
        </div>
    )
};

export default PictureCard;