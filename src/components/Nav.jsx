import { NavLink } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.navWrapper}>
            <div className={styles.linkWrapper}>
                <NavLink 
                    to="" 
                    end
                    className={({ isActive }) => 
                        isActive ? `${styles.page} ${styles.activePage}` : styles.page
                    }
                >
                    <h2>Games</h2>
                </NavLink>
                <NavLink 
                    to="create" 
                    className={({ isActive }) => 
                        isActive ? `${styles.page} ${styles.activePage}` : styles.page
                    }
                >
                    <h2>Add game</h2>
                </NavLink>
            </div>
        </nav>
    );
}
