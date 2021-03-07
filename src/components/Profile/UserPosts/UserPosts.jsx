import React from 'react';
import classes from './UserPosts.module.css';
import AddNewPost from './AddNewPost/AddNewPost';
import PublishedPosts from './PublishedPosts/PublishedPosts';


let UserPosts = (props)=>{
	return(
		<div>
			<AddNewPost 
				newPostText={props.newPostText}
				addNewPost={props.addNewPost} 
				updatePostText={props.updatePostText}
			/>
			<PublishedPosts posts={props.posts} />
 		</div>
	)
}

export default React.memo(UserPosts);