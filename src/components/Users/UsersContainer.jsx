import React from 'react';
import {connect} from 'react-redux';
import {setUsersThunkCreator, followUserThunkCreator, unfollowUserThunkCreator, toggleFollowingInProgressActionCreator, toggleIsFetchingActionCreator, setTotalUsersCountActionCreator, setCurrentPageActionCreator} from './../../Redux/usersPageReducer'; 
import Users from './Users';
import * as axios from 'axios';
import  {getPagesInPortion,getUsers,getTotalUsersCount,getCurrentPage,getUsersOnPage,getIsFetching,getFollowingInProgress} from './../../Redux/usersPage-selector';



let mapStateToProps = (state) =>{
	return {
		users:getUsers(state),
		totalUsersCount:getTotalUsersCount(state),
		currentPage:getCurrentPage(state),
		usersOnPage:getUsersOnPage(state),
		isFetching:getIsFetching(state),
		followingInProgress:getFollowingInProgress(state),
		pagesInPortion:getPagesInPortion(state),
	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		setTotalUsersCount : (usersCount) =>{
			dispatch(setTotalUsersCountActionCreator(usersCount));
		},
		setCurrentPage : (currentPage) => {
			dispatch(setCurrentPageActionCreator(currentPage));
		},
		toggleIsFetching : () => {
			dispatch(toggleIsFetchingActionCreator());
		},
		toggleFollowingInProgress: (isFollowingInProgress,userId)=>{
			dispatch(toggleFollowingInProgressActionCreator(isFollowingInProgress,userId));
		},
		followUserThunkCreator : (userId) =>{
			dispatch(followUserThunkCreator(userId));
		},
		unfollowUserThunkCreator : (userId) => {
			dispatch(unfollowUserThunkCreator(userId));
		},
		setUsersThunkCreator : (currentPage,usersOnPage) => {
			dispatch(setUsersThunkCreator(currentPage,usersOnPage));
		}
	}
}
let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer; 