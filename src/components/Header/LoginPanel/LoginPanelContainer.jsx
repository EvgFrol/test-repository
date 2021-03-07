import React from 'react';
import LoginPanel from './LoginPanel';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {logoutThunkCreator} from './../../../Redux/authReducer';
import {getIsAuth,getLogin} from './../../../Redux/auth-selector';



class LoginPanelAPIContainer extends React.Component{
	componentDidMount = () =>{
		
	}
	
	render = () =>{
		return (
			<LoginPanel logout={this.props.logout} isAuth={this.props.isAuth} login={this.props.login} />
		)
	}
}

let mapStateToProps = (state) =>{
	return {
		isAuth:getIsAuth(state),
		login:getLogin(state),
	}
}	

let mapDispatchToProps = (dispatch) =>{
	return {
		logout:()=>{
			dispatch(logoutThunkCreator());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPanelAPIContainer);