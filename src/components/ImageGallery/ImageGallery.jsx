import PictureCard from "../PictureCard/PictureCard";
import styles from "./ImageGallery.module.css";
import { PICTURECARDS } from "../../content/pictureCards";

const ImageGallery = ({ selectedTags, searchQuery }) => {
  console.log(selectedTags);

  const filteredItems = PICTURECARDS.filter((card) => {
    if (selectedTags.length === 0) {
      return true;
    }
    return card.tags.some((tag) => selectedTags.includes(tag));
  });

  const filteredAndSearchedItems = filteredItems.filter((card) => {
    return card.title.toLowerCase().includes(searchQuery.toLowerCase());
  })

  console.log(filteredAndSearchedItems)

  return (
    <div className={styles.imageGallery}>
      {filteredAndSearchedItems.map((card) => (
        <PictureCard
          key={card.id}
          title={card.title}
          pic={card.pic}
          tags={card.tags}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
