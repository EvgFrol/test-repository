import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export let withAuthRedirect = (Component) => {
	let ContainerComponent = (props)=>{
		
		if(!props.isAuth){return <Redirect to='login/' />}
		
		return(
			<Component {...props} />
		)
	}
	
	let mapStateToProps = (state) =>{
		return {
			isAuth:state.auth.isAuth,
		}
	}
	
	return connect(mapStateToProps,null)(ContainerComponent);
	
}