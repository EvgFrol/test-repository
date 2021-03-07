import React from 'react';
import classes from './Header.module.css';
import LoginPanelContainer from './LoginPanel/LoginPanelContainer';
import {NavLink} from 'react-router-dom';


let Header = (props)=>{
	return(
		<header className={classes.header}>
			<NavLink to="/profile" >
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53K9N8zHCT83D67nH228rxKxkS6RMojtknA&usqp=CAU=" alt="logo"/>
			</NavLink>
			<LoginPanelContainer />
		</header>
	)
}

export default Header;