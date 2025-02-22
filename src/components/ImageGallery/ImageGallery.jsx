import PictureCard from "../PictureCard/PictureCard";
import styles from '../ImageGallery/ImageGallery.module.css'
import pic from '../../sidim-ne-rypaemsya.png'

const ImageGallery = () => {
    return (
        <div className={ styles.imageWrapper }>
            <PictureCard title='Я люблю карину' pic={pic}/>
            <PictureCard title='Я люблю карину' pic={pic}/>
            <PictureCard title='Я люблю карину' pic={pic}/>
            <PictureCard title='Я люблю карину' pic={pic}/>
            <PictureCard title='Я люблю карину' pic={pic}/>
            <PictureCard title='Я люблю карину' pic={pic}/>
        </div>
    )
};

export default ImageGallery;