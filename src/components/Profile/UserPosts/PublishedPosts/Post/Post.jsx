import React from 'react';
import classes from './Post.module.css';

let Post = (props)=>{
	return(
		<div className={classes.postWrapper}>
			<div className={classes.row}>
				<div className={classes.userAvatar}>
					<img src="https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg" alt="userAvatar" />
				</div>
				<div className={classes.postText}>
					{props.postText}
				</div>
			</div>
			<div className={classes.row}>
				<div className={classes.likeButton}>
					<span>Мне нравится</span>
				</div>
				<div className={classes.likesCount}>
					{props.likesCount}
				</div>
			</div>
		</div>
	)
}

export default Post;