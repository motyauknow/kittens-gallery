import styles from '../Navbar/Navbar.module.css';
import logo from '../../logo512.png'

const Navbar = () => {
    return (
        <div className={ styles.navbar }>
            <a href="#!"><img className={ styles.logo } src={ logo } alt="Тут нарисую лого в виде котёнка потом"></img></a>
            <search>
                <input type="search" className={ styles.search } placeholder='Search'/>
            </search>
            <button className={ styles.addNew }>Add new pic!</button>
        </div>
    )
}

export default Navbar;