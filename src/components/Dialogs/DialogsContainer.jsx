import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addNewMessageActionCreator, updateMessageTextActionCreator} from './../../Redux/dialogsPageReducer';
import {compose} from 'redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {getNewMessageText,getMessagesData,getDialogsData} from './../../Redux/dialogsPage-selector';



let mapStateToProps=(state)=>{
	return {
		newMessageText:getNewMessageText(state),
		dialogs:getDialogsData(state),
		messages:getMessagesData(state),
	}
}

let mapDispatchToProps=(dispatch)=>{
	return {
		addNewMessage:()=>{
			dispatch(addNewMessageActionCreator());
		},
		updateMessageText:(text)=>{
			dispatch(updateMessageTextActionCreator(text));
		}
	}
}


/*let DialogsContainer = (props) =>{
	
	let state=props.store.getState().dialogsPage;
	let addNewMessage=()=>{
		props.store.dispatch(props.addNewMessageActionCreator());
		props.store.dispatch(props.updateMessageTextActionCreator(''));
	}
	
	let updateMessageText = (text) =>{
		props.store.dispatch(props.updateMessageTextActionCreator(text));
	}

	return (
		<Dialogs addNewMessage={addNewMessage}
			dialogsPage={state}
			updateMessageText={updateMessageText}
			dialogsData={state.dialogsData} 
			messages={state.messagesData} 
			newMessageText={state.newMessageText}
		/>
	)
}
*/

export default compose(withAuthRedirect, 
					   connect(mapStateToProps,mapDispatchToProps)
			   )(Dialogs);