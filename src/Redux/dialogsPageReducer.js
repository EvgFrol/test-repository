let UPDATE_MESSAGE_TEXT = './my-app/dialogsPage/UPDATE_MESSAGE_TEXT',
	ADD_NEW_MESSAGE = './my-app/dialogsPage/ADD_NEW_MESSAGE';


let initialState={
	newMessageText:'',
	dialogsData:[
		{id:1, name:"Masha"},
		{id:2, name:"Sasha"},
		{id:3, name:"Evgeny"},
		{id:4, name:"Dmitry"},
		{id:5, name:"Masha"},
	],
	messagesData:[
		{id:1, messageText:'Hello!'},
		{id:2, messageText:'How are you!'},
		{id:3, messageText:'=)'},
	],
}

let dialogsPageReducer = (state=initialState, action) =>{
	switch(action.type){
		case UPDATE_MESSAGE_TEXT:
			return {
				...state,
				newMessageText:action.text,
			};
		break;
		
		case ADD_NEW_MESSAGE:
			let newMessage={
				id:state.messagesData.length+1,
				messageText:state.newMessageText,
			}
			return {
				...state,
				messagesData:[...state.messagesData, newMessage],
				newMessageText:'',
			}
		break;
		
		default:
			return state;
	}
}

export let updateMessageTextActionCreator = (text) =>{
	return {
		type:UPDATE_MESSAGE_TEXT,
		text:text,
	};
}

export let addNewMessageActionCreator = () =>{
	return {
		type:ADD_NEW_MESSAGE,
	};
}

export default dialogsPageReducer;