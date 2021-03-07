import React from 'react';
import styles from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

let DialogsItem = (props)=>{
	return(
		<div className={styles.dialogsItem}>
			<NavLink to={"/dialogs/"+props.id} activeClassName={styles.active}> {props.name} </NavLink>
		</div>
	)
}

export default DialogsItem;