import PictureCard from "../PictureCard/PictureCard";
import styles from './ImageGallery.module.css'
import { PICTURECARDS } from '../../content/pictureCards'

const ImageGallery = ({ selectedTags }) => {
    console.log(selectedTags)

    const filteredItems = PICTURECARDS.filter((card) => {
        if (selectedTags.length === 0) {
          return true;
        }
        return card.tags.some((tag) => selectedTags.includes(tag));
      });

    return (
        <div className={ styles.imageGallery }>
            {filteredItems.map((card) => (
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