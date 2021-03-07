import React from 'react';
import styles from './Message.module.css';

let Message =  (props) =>{
	return(
		<div className={styles.message}>
			{props.messageText}
		</div>
	)
}

export default Message;
