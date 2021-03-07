import React from 'react';
import classes from './PublishedPosts.module.css';
import Post from './Post/Post';


let PublishedPosts = (props)=>{
	
	
	let PostElements = props.posts.map(p=>{
		return <Post key={p.id} postText={p.postText} likesCount={p.likesCount} />
	});
	
	
	return(
		<div>
			{PostElements}
		</div>
	)
}

export default PublishedPosts;