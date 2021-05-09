import React from "react";
import { NavItem } from './NavItem.js';
import styles from "../../styles/Nav/nav.css";
import Logo from "../../assets/img/ck-logo1.png";

const Nav = (props) => {
    return (
        <nav>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    <li className={styles.logo}>
                        <img className={styles.logoImage} src={Logo}>
                        </img>
                    </li>
                    {props.navLinks.map((item, index) => {
                        return (
                        <li className={styles.listItem} key={index}>
                            <NavItem path={item.path}>
                                {item.title}
                            </NavItem>
                        </li>)
                    })}
                </ul>
            </div>
        </nav> 
    );
};


export { Nav };