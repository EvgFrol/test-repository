import reducer from './profilePageReducer';

let testInitialState={
	newPostText:'sdfsdfdsf',
	postsData:[
		{id:1, postText:"Первый пост", likesCount:"4"},
		{id:2, postText:"Второй пост", likesCount:"1"},
		{id:3, postText:"Третий пост", likesCount:"0"},
		{id:4, postText:"Просто пост", likesCount:"4"},
	],
	profileInfo:null,
	status:null,
};

describe('reducer test',()=>{
	it('ADD_NEW_POST should increase the postsData array length value by 1',()=>{
		expect(reducer(testInitialState,{type:'ADD_NEW_POST'}).postsData.length).toEqual(5);
	});
})