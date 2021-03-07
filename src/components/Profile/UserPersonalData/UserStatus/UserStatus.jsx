import React, {useState, useEffect} from 'react';

let UserStatus = React.memo((props) =>{ 
	
	
	let [editMode, changeEditMode] = useState(false);
	let [status, changeStatus] = useState(props.status);
	
	useEffect(()=>{changeStatus(props.status)},[props.status]);
	/*componentDidUpdate=(prevProps,prevState)=>{
		if(prevProps.status!==this.props.status){
			this.setState({
				status:this.props.status,
			});
		}
	}*/
	
	let activateEditMode = () =>{
		if(props.isOwner){
			changeEditMode(true);
		}
	}
	
	let deactivateEditMode = () =>{
		changeEditMode(false);
		props.updateUserStatusThunkCreator(status);
	}
	
	let onStatusChange=(e)=>{
		changeStatus(e.target.value);
	}
	
		return(
			<div>
				{!editMode ?
					<span onDoubleClick={activateEditMode}>{props.status}</span> : 
					<input onChange={onStatusChange} onBlur={deactivateEditMode} type='text' value={status} autoFocus={true}></input>
				}
			</div>
		)
})

export default UserStatus;