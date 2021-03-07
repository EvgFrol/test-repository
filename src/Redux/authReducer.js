import {authAPI} from './../api/api';
import { FORM_ERROR } from 'final-form';

let SET_USER_DATA = './my-app/auth/SET_USER_DATA';
let SET_CAPTCHA_URL = './my-app/auth/SET_CAPTCHA_URL';
	

let defaultState={
	id:null,
	login:null,
	email:null,
	isAuth:false,
	captchaURL:null
}

let authReducer = (state=defaultState, action) =>{
	switch(action.type){
		case SET_USER_DATA:
			return{
				...state,
				...action.data,
				isAuth:action.isAuth,
			}
		break;
		
		case SET_CAPTCHA_URL:
			return{
				...state,
				captchaURL:action.captchaURL,
			}
		break;
		
		default:
			return state;
	}
}

export let setUserDataActionCreator = (data, isAuth) =>{
	return{
		type:SET_USER_DATA,
		data:data,
		isAuth:isAuth,
	}
}

let setCaptchaURLActionCreator = (captchaURL) =>{
	return {
		type:SET_CAPTCHA_URL,
		captchaURL:captchaURL,
	}
}

export let getAuthDataThunkCreator = () => (dispatch) =>{
	return authAPI.getAuthData().then((data)=>{
		if(!data.resultCode){
			dispatch(setUserDataActionCreator(data.data, true))
		}else{
			dispatch(setUserDataActionCreator(null, false));
		}
	});
}

export let loginThunkCreator = (loginData) => (dispatch) =>{
	return (async(values)=>{
		let data=await authAPI.login(values);
		if(!data.resultCode){
			dispatch(setCaptchaURLActionCreator(null));
			dispatch(getAuthDataThunkCreator());
		}else if(data.resultCode==10){
			dispatch(getCaptchaURLThunkCreator())
			return {[FORM_ERROR]:data.messages[0]};
		}else{
			 return {[FORM_ERROR]:data.messages[0]};
		}
	})(loginData);
}

export let logoutThunkCreator = () => (dispatch) =>{
	authAPI.logout().then(data=>{
		!data.resultCode ? dispatch(setUserDataActionCreator(null,false)) : console.log('warning')
	});
}

export let getCaptchaURLThunkCreator = () => (dispatch) =>{
	authAPI.getCaptchaURL().then(data=>{
		dispatch(setCaptchaURLActionCreator(data.url));
	});
}

export default authReducer;

