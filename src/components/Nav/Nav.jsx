import React from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';


let Nav=(props)=>{
	let navItems=props.sidebarData.navItems;
	let navItemsElements = navItems.map(n=>{
		return <NavItem key={n.id} linkTo={n.linkTo} linkName={n.linkName} />
	})
	
	return(
		<nav className={styles.nav}>
		<ul className={styles.navList}>
			{navItemsElements}
		</ul>
		</nav>
	)
}

export default Nav;


