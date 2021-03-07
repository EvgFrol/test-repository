import React from 'react';
import {Form, Field} from 'react-final-form';
import {required,maxSymbolsLength} from './../../validator/validate';
import {connect} from 'react-redux';
import {loginThunkCreator} from './../../Redux/authReducer';
import {Redirect} from 'react-router-dom';
import {getIsAuth, getCaptchaURL} from './../../Redux/auth-selector';



let composeValidators = (...validators) => (value)=>{
	return validators.reduce((error,validator)=>error || validator(value), undefined);
}


let maxSymbolsLength30=maxSymbolsLength(30);
let LoginForm = (props)=>{
	let onFormSubmit=async (values)=>{
		return props.login(values);
	};
	
	return(
		<Form 
		 initialValues={{
		}}
		onSubmit={onFormSubmit}
		captchaURL={props.captchaURL}
		>
		{(props)=>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field name="login" validate={composeValidators(required, maxSymbolsLength30)}>
						{({input,meta})=>
							<div>
								<input {...input} placeholder="Login" type="text"/>	
								<span>{meta.touched && meta.error}</span>
							</div>
						}
					</Field>
				</div>
				<div>
					<Field name="password" validate={composeValidators(required)}>
						{({input,meta})=>
							<div>
								<input {...input} placeholder="Password" type="text"/>	
								<span>{meta.touched && meta.error}</span>
							</div>
						}
					</Field>
				</div>
				<div>
					<Field name="rememberMe" >
						{({input,meta})=>
							<input {...input} type="checkbox" placeholder="rememberMe"/>
						}
					</Field>
				</div>
				
				{props.captchaURL ? (<div>
					<img src={props.captchaURL} alt='captcha' />
					<Field name="captcha">
						{({input,meta})=>
							
							<input {...input} type="text" placeholder="Captcha"/>
						}
					</Field>
				</div>) : null }
				 {props.submitError && <div className="error">{props.submitError}</div>}
				<div><button type="submit">Login</button></div>
			</form>
		}
		</Form>
	)
}

let mapStateToProps=(state)=>{
	return {
		isAuth:getIsAuth(state),
		captchaURL:getCaptchaURL(state),
	}
}

let mapDispatchToProps=(dispatch)=>{
	return {
		login:(loginData)=>{
			return dispatch(loginThunkCreator(loginData));
		},
	}
}


let Login = (props) =>{
	if(props.isAuth) {
		return <Redirect to="/profile" />
	}
	return(
		<div>
			<h1>LOGIN</h1>
			<LoginForm login={props.login} captchaURL={props.captchaURL} />
		</div>
	);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
