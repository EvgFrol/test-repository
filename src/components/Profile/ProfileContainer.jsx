import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {updateProfileInfoThunkCreator, updateProfilePhotoThunkCreator, changeIsOwnerActionCreator, updateUserStatusThunkCreator, getUserStatusThunkCreator,getProfileInfoThunkCreator, updatePostTextActionCreator,addNewPostActionCreator, setProfileInfoActionCreator} from './../../Redux/profilePageReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getPostsData,getProfileInfo,getNewPostText,getStatus,getIsOwner} from './../../Redux/profilePage-selector';
import {getId} from './../../Redux/auth-selector';

let mapStateToProps = (state) =>{
	return {
		posts:getPostsData(state),
		profileInfo:getProfileInfo(state),
		newPostText:getNewPostText(state),
		myProfileId:getId(state),
		status:getStatus(state),
		isOwner:getIsOwner(state),
	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		updatePostText: (text) =>{
			dispatch(updatePostTextActionCreator(text));
		},
		addNewPost: () =>{
			dispatch(addNewPostActionCreator());
		},
		setProfileInfo: (profileInfo)=>{
			dispatch(setProfileInfoActionCreator(profileInfo));
		},
		getProfileInfoThunkCreator:(userId)=>{
			dispatch(getProfileInfoThunkCreator(userId));
		},
		getUserStatusThunkCreator:(userId)=>{
			dispatch(getUserStatusThunkCreator(userId));
		},
		updateUserStatusThunkCreator:(status)=>{
			dispatch(updateUserStatusThunkCreator(status));
		},
		changeIsOwnerActionCreator:(isOwner)=>{
			dispatch(changeIsOwnerActionCreator(isOwner));
		},
		updateProfilePhotoThunkCreator:(photoData)=>{
			dispatch(updateProfilePhotoThunkCreator(photoData));
		},
		updateProfileInfoThunkCreator:(profileInfoData, userId)=>{
			return dispatch(updateProfileInfoThunkCreator(profileInfoData,userId));
		}
	}
}

class ProfileAPIContainer extends React.PureComponent {
	
	updateUserId = () =>{
		let userId = (this.props.match.params.userId)?this.props.match.params.userId:this.props.myProfileId;
		if(userId==this.props.myProfileId){
			this.props.changeIsOwnerActionCreator(true);
		}else{
			this.props.changeIsOwnerActionCreator(false);
		}
		this.props.getProfileInfoThunkCreator(userId);
		this.props.getUserStatusThunkCreator(userId);
	}
	
	componentDidMount = () =>{
		this.updateUserId();
	}
	
	componentDidUpdate = (prevProps, prevState)=>{
		if(this.props.match.params.userId!=prevProps.match.params.userId){
			this.updateUserId();
		}
	}
	
	render = () =>{
		
		return(
				<Profile {...this.props} />
		)
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps,mapDispatchToProps),
	withAuthRedirect
)(ProfileAPIContainer);

