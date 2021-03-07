import {getAuthDataThunkCreator} from './authReducer';

let SET_INITIALIZED_SUCCESS = './my-app/app/SET_INITIALIZED_SUCCESS';

let defaultState={
	isAppInitialized:false,
}

let appReducer=(state=defaultState,action)=>{
	switch (action.type){
		case SET_INITIALIZED_SUCCESS :
			return {
				...state,
				isAppInitialized:true,
			}
		break;
		default :
			return state;
	}
}

export default appReducer;

let setInitializedSuccessActionCreator = () =>{
	return{
		type:SET_INITIALIZED_SUCCESS,
	}
}

export let appInitialization = () => (dispatch) =>{
	dispatch(getAuthDataThunkCreator()).then(()=>{
		dispatch(setInitializedSuccessActionCreator());
	});
}