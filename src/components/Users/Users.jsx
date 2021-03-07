import React from 'react';
import * as axios from 'axios';
import  User from './User/User';
import PaginationAPIContainer from './Pagination/PaginationAPIContainer';
import Preloader from './../common/Preloader/Preloader';

class Users extends React.PureComponent{
	
	componentDidMount=()=>{
		this.props.setUsersThunkCreator(this.props.currentPage,this.props.usersOnPage);	
	}
	
	
	render=()=>{
		let usersElements = this.props.users.map((user)=>{
			return (
				<User 
					key={user.id} 
					id={user.id} 
					name={user.name} 
					status={user.status}
					followed={user.followed}					
					userPhoto={user.photos.small} 
					followUserThunkCreator={this.props.followUserThunkCreator}
					unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
					followingInProgress={this.props.followingInProgress}
					toggleFollowingInProgress={this.props.toggleFollowingInProgress}
				/>
			)
		});
		
		return (
			<div>
				<div >
					<PaginationAPIContainer pagesInPortion={this.props.pagesInPortion} totalUsersCount={this.props.totalUsersCount} setUsersThunkCreator={this.props.setUsersThunkCreator} isFetching ={this.props.isFetching} setCurrentPage={this.props.setCurrentPage}  usersOnPage={this.props.usersOnPage} currentPage={this.props.currentPage}/>
				</div>
				{this.props.isFetching ? <Preloader /> : usersElements}
			</div>
		)
	}
}

export default Users;