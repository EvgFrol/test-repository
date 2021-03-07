import * as axios from 'axios';

let instance=axios.create({
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	withCredentials:true,
	headers:{
		'API-KEY':'4b630712-4167-4357-a059-9386551b1200'
	}
});

export let usersAPI={
	followUser(userId){
		return instance.post(`follow/${userId}`).then(response=>{return response.data});
	},
	unfollowUser(userId){
		return instance.delete(`follow/${userId}`).then(response=>{return response.data});
	},
	setUsers(currentPage, usersOnPage){
		return instance.get(`users?page=${currentPage}&count=${usersOnPage}`).then(response=>{return response.data});
	}
}

export let profileAPI={
	getProfileInfo(userId){
		return instance.get(`profile/${userId}`).then(response=>{return response.data});
	},
	getUserStatus(userId){
		return instance.get(`profile/status/${userId}`).then(response=>{return response.data});
	},
	updateUserStatus(status){
		return instance.put(`profile/status`,{status:status}).then(response=>{return response.data});
	},
	updateProfilePhoto(dataImage){
		let formData = new FormData();
		formData.append("image", dataImage);
		return instance.put(`profile/photo`, formData, {headers:{'Content-Type': 'multipart/form-data'}}).then(response=>{return response.data});
	},
	updateProfileInfo(ProfileInfoData){
		return instance.put(`profile`, ProfileInfoData).then(response=>{return response.data});
	},
}

export let authAPI={
	getAuthData:async()=>{
		let data = await instance.get(`auth/me`);
		return data.data;
	},
	login:async(loginData)=>{
		let data = await instance.post(`auth/login`,{email:loginData.login,password:loginData.password,rememberMe:loginData.rememberMe||false,captcha:loginData.captcha||false})
		return data.data;
	},
	logout:()=>{
		return instance.delete(`auth/login`).then(response=>{return response.data});
	},
	getCaptchaURL:()=>{
		return instance.get(`/security/get-captcha-url`).then(response=>{return response.data});
	}
}