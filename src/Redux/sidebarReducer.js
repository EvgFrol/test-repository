let initialState={
	navItems:[
		{id:1, linkTo:"/profile", linkName:"Profile"},
		{id:2, linkTo:"/dialogs", linkName:"Messages"},
		{id:3, linkTo:"/news", linkName:"News"},
		{id:4, linkTo:"/music", linkName:"Music"},
		{id:5, linkTo:"/users", linkName:"Users"},
	],
}

let sidebarReducer=(state=initialState,action)=>{
	switch(action.type){
		case 'fdgfd':
		
		break;
		
		default: 
			return state;
	}
}

export default sidebarReducer;