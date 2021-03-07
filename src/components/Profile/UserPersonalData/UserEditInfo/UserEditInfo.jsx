import React, {useEffect, useState} from 'react';
import  {Form, Field} from 'react-final-form';
import {FORM_ERROR} from 'final-form';


let UserEditInfo = React.memo(({profileInfo, deactivateEditMode,updateProfileInfoThunkCreator}) =>{
	let profileDefaultAvatar=null;
	
	let contactsSource = Object.keys(profileInfo.contacts);
	let showContacts = contactsSource.map(key=>{
		return (
			<div key={key}>
				<span>{key}:</span>
				<Field name={'contacts.' + key} >
					{({input,meta})=>
						<div>
							<input {...input} placeholder={key + ' address'} type="text"/>	
							<span>{meta.touched && meta.error}</span>
						</div>
					}
				</Field>
			</div>
		)
	});
	
	let submitProfileInfoForm = (data) =>{
		return updateProfileInfoThunkCreator(data, profileInfo.userId).then((data)=>{
			if(!data){
				deactivateEditMode();
			}else{
				return data;
			}
		});
	}
	
	
	return (
		<Form 
		 initialValues={{...profileInfo}}
		onSubmit={submitProfileInfoForm}
		>
		{(props)=>
			<form onSubmit={props.handleSubmit}>
				<div>
					<button type="submit">Enter</button>
				</div>
				{props.submitError && <div className="error">{props.submitError}</div>}
				<div>
					<span>Имя: </span>
					<Field name="fullName" >
							{({input,meta})=>
								<div>
									<input {...input} placeholder="Name" type="text"/>	
									<span>{meta.touched && meta.error}</span>
								</div>
							}
					</Field>
				</div>
				<div>
					<span>Обо мне: </span>
					<Field name="aboutMe" >
							{({input,meta})=>
								<div>
									<input {...input} placeholder="About me" type="text"/>	
									<span>{meta.touched && meta.error}</span>
								</div>
							}
					</Field>
				</div>
				<div>
					<span>Мои контакты :</span>
					{showContacts}
				</div>
			</form>
		}
		</Form>
	)
})

export default UserEditInfo;
