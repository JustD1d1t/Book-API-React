import logo from "../../../static/logo.png";
import { Link } from "react-router-dom";

import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav>
        <ul className={styles.linkContianer}>
          <li>
            <Link to="/" className={styles.linkItem}>
              Strona główna
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={styles.linkItem}>
              Ulubione
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
