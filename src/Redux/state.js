import profilePageReducer, {addNewPostActionCreator, updatePostTextActionCreator } from './profilePageReducer';
import dialogsPageReducer, {addNewMessageActionCreator, updateMessageTextActionCreator} from './dialogsPageReducer';


let store={
	_state:{
		dialogsPage:{
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
		},
		profilePage:{
			newPostText:'',
			postsData:[
				{id:1, postText:"Первый пост", likesCount:"4"},
				{id:2, postText:"Второй пост", likesCount:"1"},
				{id:3, postText:"Третий пост", likesCount:"0"},
				{id:4, postText:"Просто пост", likesCount:"4"},
			],
		},
		sidebar:{
			navItems:[
				{id:1, linkTo:"/profile", linkName:"Profile"},
				{id:2, linkTo:"/dialogs", linkName:"Messages"},
				{id:3, linkTo:"/news", linkName:"News"},
				{id:4, linkTo:"/music", linkName:"Music"},
			],
		},
	},
	getState(){
		return this._state;
	},
	subscribe(func){
		this.rerenderEntireTree=func;
	},
	rerenderEntireTree(){
	},
	
	dispatch(action){
		/*switch(action.type){
			case 'ADD_NEW_POST':
				let newPost={
					id:5,
					postText:this._state.profilePage.newPostText,
					likesCount:0,
				};
				this._state.profilePage.postsData.push(newPost);
				this.dispatch(updatePostTextActionCreator(''));
				this.rerenderEntireTree(this._state);
			break;
				
			case 'UPDATE_POST_TEXT':
				this._state.profilePage.newPostText=action.text;
				this.rerenderEntireTree(this._state);
			break;
			
			case 'UPDATE_MESSAGE_TEXT':
				this._state.dialogsPage.newMessageText=action.text;
				this.rerenderEntireTree(this._state);
			break;
			
			case 'ADD_NEW_MESSAGE':
				let newMessage={
					id:5,
					messageText:this._state.dialogsPage.newMessageText,
				}
				this._state.dialogsPage.messagesData.push(newMessage);
				this.dispatch(updateMessageTextActionCreator(''));
				this.rerenderEntireTree(this._state);
			break;
		}*/
		this._state.profilePage = profilePageReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
		this.rerenderEntireTree(this._state);
	}
}



window.state=store.getState();
 

export default store;