import {profileAPI} from './../api/api';
import {FORM_ERROR} from 'final-form';

let ADD_NEW_POST = './my-app/profilePage/ADD_NEW_POST',
	UPDATE_POST_TEXT = './my-app/profilePage/UPDATE_POST_TEXT',
	SET_PROFILE_INFO = './my-app/profilePage/SET_PROFILE_INFO',
	SET_USER_STATUS = './my-app/profilePage/SET_USER_STATUS',
	CHANGE_IS_OWNER = './my-app/profilePage/CHANGE_IS_OWNER',
	UPDATE_PROFILE_PHOTOS =	'./my-app/profilePage/UPDATE_PROFILE_PHOTOS';

let initialState={
	newPostText:'',
	postsData:[
		{id:1, postText:"Первый пост", likesCount:"4"},
		{id:2, postText:"Второй пост", likesCount:"1"},
		{id:3, postText:"Третий пост", likesCount:"0"},
		{id:4, postText:"Просто пост", likesCount:"4"},
	],
	profileInfo:null,
	status:null,
	isOwner:false,
};


let profilePageReducer = (state=initialState, action) =>{
	switch(action.type){
		case ADD_NEW_POST:
			let newPost={
				id:state.postsData.length+1,
				postText:state.newPostText,
				likesCount:0,
			};
			return {
				...state,
				postsData:[...state.postsData, newPost],
				newPostText:'',
			};
		break;
			
		case UPDATE_POST_TEXT:
			return {
				...state,
				newPostText:action.text,
			};
		break;
		
		case SET_PROFILE_INFO:
			return{
				...state,
				profileInfo:action.profileInfo,
			}
		break;	
		
		case SET_USER_STATUS:
			return{
				...state,
				status:action.status,
			}
		break;
		
		case CHANGE_IS_OWNER:
			return{
				...state,
				isOwner:action.isOwner,
			}
		break;
		
		case UPDATE_PROFILE_PHOTOS :
			return {
				...state,
				profileInfo:{...state.profileInfo, photos:action.photos}
			}
		break;
		
		default:
			return state;
	}
}

export let addNewPostActionCreator = () =>{
	return {
		type: ADD_NEW_POST,
	};
}

export let updatePostTextActionCreator = (text) =>{
	return {
		type: UPDATE_POST_TEXT,
		text:text,
	};
}

export let setProfileInfoActionCreator = (profileInfo) =>{
	return {
		type: SET_PROFILE_INFO,
		profileInfo:profileInfo,
	}
}

export let getProfileInfoThunkCreator = (userId) => (dispatch) =>{
	profileAPI.getProfileInfo(userId).then(data=>{
		if(!data.resulCode){
			dispatch(setProfileInfoActionCreator(data));
		}else{
			return null;
		}
	});
}

export let setUserStatusActionCreator = (status) =>{
	return {
		type: SET_USER_STATUS,
		status:status,
	}
}

export let getUserStatusThunkCreator = (userId) => (dispatch)=>{
	profileAPI.getUserStatus(userId).then(data=>{
		dispatch(setUserStatusActionCreator(data));
	});
}

export let updateUserStatusThunkCreator = (status) => (dispatch) =>{
	profileAPI.updateUserStatus(status).then(data=>{
		dispatch(setUserStatusActionCreator(status));
	});
}

export let changeIsOwnerActionCreator = (isOwner) =>{
	return {
		type: CHANGE_IS_OWNER,
		isOwner:isOwner,
	}
}

export let updateProfilePhotoThunkCreator = (photoData) => (dispatch) =>{
	profileAPI.updateProfilePhoto(photoData).then(data=>{
		if(!data.resultCode){
			dispatch(updateProfilePhotoActionCreator(data.data.photos));
		}
	});
}

let updateProfilePhotoActionCreator = (photos) =>{
	return {
		type: UPDATE_PROFILE_PHOTOS,
		photos:photos,
	}
}

export let updateProfileInfoThunkCreator = (profileInfoData, userId) => (dispatch) =>{
	return profileAPI.updateProfileInfo(profileInfoData).then(data=>{
		if(!data.resultCode){
			dispatch(getProfileInfoThunkCreator(userId));
		}else{
			return {[FORM_ERROR]:data.messages[0]};
		}
	});
}

export default profilePageReducer;