import React from 'react';
import classes from './AddNewPost.module.css';

let AddNewPost = (props)=>{
	let updatePostText=(e)=>{
		props.updatePostText(e.target.value);
	}
	
	return(
		<div className={classes.addNewPostWrapper}>
			<textarea onChange={updatePostText} className={classes.addPostText} value={props.newPostText} ></textarea>
			<button onClick={props.addNewPost} className={classes.addPostButton}>Отправить сообщение</button>
		</div>
	)
}

export default AddNewPost;