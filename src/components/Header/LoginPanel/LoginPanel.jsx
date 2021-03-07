import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './LoginPanel.module.css';

let LoginPanel = (props) =>{
	
	return (
		<div>
			{props.isAuth ? 
				(<div><NavLink to='/profile'>{props.login}</NavLink> 
				<button onClick={props.logout} >LOGOUT</button></div>) : 
				<NavLink to='/login'>Login</NavLink>
			}
		</div>
	)
}

export default LoginPanel;