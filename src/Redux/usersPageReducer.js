import {usersAPI} from './../api/api';


let FOLLOW = './my-app/usersPage/FOLLOW',
	UNFOLLOW = './my-app/usersPage/UNFOLLOW',
	SET_USERS = './my-app/usersPage/SET_USERS',
	SET_CURRENT_PAGE = './my-app/usersPage/SET_CURRENT_PAGE',
	SET_TOTAL_USERS_COUNT = './my-app/usersPage/SET_TOTAL_USERS_COUNT',
	TOGGLE_IS_FETCHING = './my-app/usersPage/TOGGLE_IS_FETCHING',
	TOGGLE_FOLLOWING_IN_PROGRESS = './my-app/usersPage/TOGGLE_FOLLOWING_IN_PROGRESS';



let defaultState={
	users:[
		
	],
	usersOnPage:10,
	totalUsersCount:0,
	currentPage:1,
	isFetching:false,
	followingInProgress:[],
	pagesInPortion:5,
}

let usersPageReducer = (state=defaultState, action) =>{
	switch(action.type){
		case FOLLOW:
			return {
				...state,
				users:state.users.map((user)=>{
					if(user.id===action.userId){
						user.followed=true;
						return user;
					}else{
						return user;
					}
				}),
			}
		break;
		case UNFOLLOW:
			return {
				...state,
				users:state.users.map((user)=>{
					if(user.id===action.userId){
						user.followed=false;
						return user;
					}else{
						return user;
					}
				}),
			}
		break;
		case SET_USERS:
			return {
				...state,
				users:[...action.users],
			}
		break;
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage:action.currentPage,
			}
		break;
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount:action.totalUsersCount,
			}
		break;
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching:!state.isFetching,
			}
		break;
		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress:action.isFollowingInProgress ?
								    [...state.followingInProgress, action.userId] :
									state.followingInProgress.filter(userId=>userId!=action.userId),
			}
		break;
		default:
			return state;
	}
}

export let followActionCreator = (userId) =>{
	return {
		type:FOLLOW,
		userId:userId,
	}
}

export let unfollowActionCreator = (userId) =>{
	return {
		type:UNFOLLOW,
		userId:userId,
	}
}

export let setUsersActionCreator = (users) =>{
	return {
		type:SET_USERS,
		users:users,
	}
}

export let setTotalUsersCountActionCreator = (usersCount) =>{
	return {
		type:SET_TOTAL_USERS_COUNT,
		totalUsersCount:usersCount,
	}
}

export let setCurrentPageActionCreator = (currentPage) =>{
	return {
		type:SET_CURRENT_PAGE,
		currentPage:currentPage,
	}
}

export let toggleIsFetchingActionCreator = () =>{
	return {
		type:TOGGLE_IS_FETCHING,
	}
}

export let toggleFollowingInProgressActionCreator = (isFollowingInProgress,userId)=>{
	return {
		type:TOGGLE_FOLLOWING_IN_PROGRESS,
		isFollowingInProgress:isFollowingInProgress,
		userId:userId,
	}
}

export let followUserThunkCreator = (userId) => (dispatch) => {
	dispatch(toggleFollowingInProgressActionCreator(true,userId));
	usersAPI.followUser(userId).then(data=>{
		if(data.resultCode==0){
			dispatch(followActionCreator(userId));
			dispatch(toggleFollowingInProgressActionCreator(false,userId));
		}
	});
}

export let unfollowUserThunkCreator = (userId) => (dispatch) => {
	dispatch(toggleFollowingInProgressActionCreator(true,userId));
	usersAPI.unfollowUser(userId).then(data=>{
		if(data.resultCode==0){
			dispatch(unfollowActionCreator(userId));
			dispatch(toggleFollowingInProgressActionCreator(false,userId));
		}
	});
}

export let setUsersThunkCreator = (currentPage,usersOnPage) => (dispatch) => {
	dispatch(toggleIsFetchingActionCreator());
	usersAPI.setUsers(currentPage,usersOnPage).then(data=>{
		dispatch(toggleIsFetchingActionCreator());
		dispatch(setUsersActionCreator(data.items));
		dispatch(setTotalUsersCountActionCreator(data.totalCount));
	});
}

export default usersPageReducer;