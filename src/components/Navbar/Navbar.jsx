import styles from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={ styles.navbar }>
            <a href="#!"><img src="/public/sidim-ne-rypaemsya" alt="Тут нарисую лого в виде котёнка потом"></img></a>
            <search>
                <input type="search" className={ styles.search } placeholder='Search'/>
            </search>
            <button>Add new pic!</button>
        </div>
    )
}

export default Navbar