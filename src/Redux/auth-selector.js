export let getId = (state) =>{
	return state.auth.id;
}

export let getLogin = (state) =>{
	return state.auth.login;
}

export let getEmail = (state) =>{
	return state.auth.email;
}

export let getIsAuth = (state) =>{
	return state.auth.isAuth;
}

export let getCaptchaURL = (state) =>{
	return state.auth.captchaURL;
}
