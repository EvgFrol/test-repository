import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavItem.module.css';

let NavItem= (props)=>{
	return(
		<li className={styles.navItem}><NavLink to={props.linkTo} activeClassName={styles.active}>{props.linkName}</NavLink></li>
	)
}

export default NavItem;