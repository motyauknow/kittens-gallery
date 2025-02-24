import PictureCard from "../PictureCard/PictureCard";
import styles from '../ImageGallery/ImageGallery.module.css'
import { PICTURECARDS } from '../../content/pictureCards'

const ImageGallery = () => {
    return (
        <div className={ styles.imageGallery }>
            {PICTURECARDS.map((card) => (
                <PictureCard
                    key={card.id}
                    title={card.title}
                    pic={card.pic}
                    tags={card.tags}
                />
            ))}
        </div>
    )
};

export default ImageGallery;