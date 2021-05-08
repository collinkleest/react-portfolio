import React from 'react';
import styles from "../../styles/Nav/nav.css";
import { Link, useLocation} from "react-router-dom";

const NavItem = (props) => {

    return (
        <Link className={styles.navItem} to={props.path}>
            {props.children}
        </Link>
    );
}

export { NavItem };