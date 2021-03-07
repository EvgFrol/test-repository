import React, {useState, useEffect} from 'react';
import styles from './UserPersonalData.module.css';
import Preloader from './../../common/Preloader/Preloader';
import UserStatus from './UserStatus/UserStatus';
import UserEditInfo from './UserEditInfo/UserEditInfo';


let profileDefaultAvatar = "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg";	

let UserPersonalData = React.memo((props) =>{
	
	let [profileInfo, changeProfileInfo] = useState(props.profileInfo);
	
	useEffect(()=>{changeProfileInfo(props.profileInfo)},[props.profileInfo]);
	
	let [editProfileInfo, setEditProfileInfo] = useState(false);
	
	let changeProfilePhoto = (e) =>{
		props.updateProfilePhotoThunkCreator(e.target.files[0]);
	}
	
	let activateEditMode = () =>{
		setEditProfileInfo(true);
	}
	let deactivateEditMode = () =>{
		setEditProfileInfo(false);
	}
	
	if(!profileInfo){
		return(
			<Preloader />
		)
	}else{
		return(
			<div className={styles.userPersonalDataWrapper}>
				<div className={styles.userAvatarWrapper}>
					<div className={styles.userAvatar}>
						<img src={profileInfo.photos.large ? profileInfo.photos.large : profileDefaultAvatar} alt="avatar" />
					</div>
					{props.isOwner && <input type="file" onChange={changeProfilePhoto}/>}
				</div>
				<div className={styles.userInfo}>
					<UserStatus isOwner={props.isOwner} status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
					{editProfileInfo && props.isOwner ? 
						<UserEditInfo profileInfo={profileInfo} deactivateEditMode={deactivateEditMode} updateProfileInfoThunkCreator={props.updateProfileInfoThunkCreator}/> :
						<UserInfo profileInfo={profileInfo} activateEditMode={activateEditMode} isOwner={props.isOwner}/> 
					}
				</div>
			</div> 
		)
	}
})

let UserInfo = React.memo(({profileInfo, activateEditMode, isOwner}) =>{
	let contactsSource = Object.keys(profileInfo.contacts);
	let showContacts = contactsSource.map(key=>{
		if(profileInfo.contacts[key]){
			return (
				<div key={key}>
					<span>{key}:</span>
					<span><a href="#">{profileInfo.contacts[key]}</a></span>
				</div>
			)
		}else{
			return null;
		}
	});
	
	return (
		<div className={styles.userInfo}>
			{isOwner ?
				<div>
					<button onClick={activateEditMode} >Edit Profile Info</button>
				</div> :
				null
			}
			
			<div>
				<span>Имя: </span>
				<span>{profileInfo.fullName}</span>
			</div>
			<div>
				<span>Обо мне: </span>
				<span>{profileInfo.aboutMe}</span>
			</div>
			<div>
				<span>Мои контакты :</span>
				{showContacts}
			</div>
			<div>
				<span></span>
				<span>{profileInfo.fullname}</span>
			</div>
		</div>
	)
})


export default UserPersonalData;