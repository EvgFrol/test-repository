import {createSelector} from 'reselect';

export let getUsersFromState = (state) =>{
	return state.usersPage.users;
}

export let getUsers = createSelector(
	[getUsersFromState],
	(users)=>{
		return users;
	}
);

export let getUsersOnPage = (state) =>{
	return state.usersPage.usersOnPage;
}

export let getPagesInPortion = (state) =>{
	return state.usersPage.pagesInPortion;
}

export let getTotalUsersCount = (state) =>{
	return state.usersPage.totalUsersCount;
}

export let getCurrentPage = (state) =>{
	return state.usersPage.currentPage;
}

export let getIsFetching = (state) =>{
	return state.usersPage.isFetching;
}

export let getFollowingInProgress = (state) =>{
	return state.usersPage.followingInProgress;
}
