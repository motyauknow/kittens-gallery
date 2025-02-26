import styles from "../Navbar/Navbar.module.css";
import logo from "../../content/logo512.png";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(searchQuery)

  return (
    <div className={styles.navbar}>
      <a href="#!">
        <img
          className={styles.logo}
          src={logo}
          alt="Тут нарисую лого в виде котёнка потом"
        ></img>
      </a>
      <search>
        <input
          type="search"
          className={styles.search}
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </search>
      <button className={styles.addNew}>Add new pic!</button>
    </div>
  );
};

export default Navbar;
