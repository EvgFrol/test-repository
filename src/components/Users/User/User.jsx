import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {usersAPI} from './../../../api/api';

let User = (props) =>{
	let defaultAvatar='https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png';
	
	let followUser=()=>{
		props.followUserThunkCreator(props.id);
	}
	
	let unfollowUser=()=>{
		props.unfollowUserThunkCreator(props.id);
	}
	
	return(
		<div className={styles.userWrapper}>
			<div className={styles.followButton}>
				{props.followed ? 
					<button disabled={props.followingInProgress.some((userId)=>userId==props.id)} onClick={unfollowUser}>UNFOLLOW</button> :
					<button disabled={props.followingInProgress.some((userId)=>userId==props.id)} onClick={unfollowUser} onClick={followUser}>FOLLOW</button>
				}
			</div>
			<NavLink to={"profile/"+ props.id}>
				<div className={styles.userPhoto}>
					<img src={props.userPhoto!==null?props.userPhoto:defaultAvatar} alt={props.name} />
				</div>
			</NavLink>
			<div className={styles.userInfo}>
				<span className={styles.userName}>{props.name}</span>
					{props.status!==null?<div className={styles.userStatus}>{props.status}</div>:null}
			</div>			
		</div>
	)
}
export default User;