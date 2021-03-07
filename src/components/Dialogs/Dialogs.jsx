import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';




let Dialogs=(props)=>{
	
	let DialogsItemElements =  props.dialogs.map(d=>{
		return <DialogsItem key={d.id} name={d.name} id={d.id}/>
	})
	
	let MessageElements = props.messages.map(m=>{
		return <Message key={m.id} messageText={m.messageText} />
	})
	
	let updateMessageText = (e) =>{
		props.updateMessageText(e.target.value);
	}

	return(
		<div className={styles.dialogsWrapper}>
			<div className={styles.dialogsItems}>
				{DialogsItemElements}
			</div>
			<div className={styles.dialogsWindow}>
				<div className={styles.resievedMessages}>
					{MessageElements}
				</div>
				<div className={styles.newMessage}>
					<textarea onChange={updateMessageText} className={styles.newMessageText} value={props.newMessageText} ></textarea>
					<button onClick={props.addNewMessage} className={styles.newMessageButton}>Отправить сообщение</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;