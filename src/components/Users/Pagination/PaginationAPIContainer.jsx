import React from 'react';
import Pagination from './Pagination';
import * as axios from 'axios';

class PaginationAPIContainer extends React.Component{
	setCurrentPage=(currentPage)=>{
		this.props.setCurrentPage(currentPage);
		this.props.setUsersThunkCreator(currentPage, this.props.usersOnPage);
	}
	
	
	render = () =>{
		let totalPages = Math.ceil(this.props.totalUsersCount/this.props.usersOnPage);
		return (
			<Pagination isFetching={this.props.isFetching} 
						totalPages = {totalPages} 
						setCurrentPage={this.setCurrentPage} 
						currentPage={this.props.currentPage} 
						pagesInPortion={this.props.pagesInPortion}
			/>
		);
	}
}

export default PaginationAPIContainer;