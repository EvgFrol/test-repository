import App from './App';
import ReactDom from 'react-dom';


it('App component shoud be rendered without crashing',()=>{
	const div = document.createElement("div");
	ReactDom.render(<App />, div);
	ReactDom.unmountComponentAtNode(div);
})