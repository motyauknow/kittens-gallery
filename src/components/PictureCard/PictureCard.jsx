const pict = 'D:/my_coding/web-galery/public/sidim-ne-rypaemsya.png'

const PictureCard = ({ pic, title, tags }) => {
    return (
        <div className="PictureCard">
            <img src={pict}
                 alt="Картинка"
            />
            <h3>{title}</h3>
        </div>
    )
};

export default PictureCard;