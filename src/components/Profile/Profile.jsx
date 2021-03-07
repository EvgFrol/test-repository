import React from 'react';
import classes from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';
import UserPersonalData from './UserPersonalData/UserPersonalData';


let Profile=React.memo(({updateUserStatusThunkCreator,
			  profileInfo,
			  status,
			  isOwner,
			  updateProfilePhotoThunkCreator,
			  posts,
			  newPostText,
			  updatePostText,
			  addNewPost,
			  updateProfileInfoThunkCreator})=>{
	return(
		<div className={classes.profileWrapper}>
			<div className={classes.userPersonalData}>
				<UserPersonalData updateUserStatusThunkCreator={updateUserStatusThunkCreator} 
								  profileInfo={profileInfo} 
								  status={status} 
								  isOwner={isOwner}
								  updateProfilePhotoThunkCreator={updateProfilePhotoThunkCreator}
								  updateProfileInfoThunkCreator={updateProfileInfoThunkCreator}
				/>
			</div>
			<div className={classes.userPosts}>
				<h2 className={classes.header}>Мои посты</h2>
				<UserPosts 
					posts={posts} 
					newPostText={newPostText}
					updatePostText={updatePostText}
					addNewPost={addNewPost}
				/>
			</div> 
		</div>
	)
})

export default Profile;