import UserStatus from './UserStatus';
import {create} from 'react-test-renderer';


describe('UserStatus component',()=>{
	test('asdad',()=>{
		let component = create(<UserStatus status="teststatus"/>);
		let instance = component.getInstance();
		expect(instance.state.status).toBe("teststatus");
	});
});