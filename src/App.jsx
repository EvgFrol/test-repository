import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import styles from './App.module.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {Switch, Route, Redirect} from 'react-router-dom';
import {appInitialization} from './Redux/appReducer';
import {getAuthDataThunkCreator} from './Redux/authReducer';
import Preloader from './components/common/Preloader/Preloader';
import {getIsAppInitialized} from './Redux/app-selector';
import store from './Redux/redux-store';

let DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component{
	
	componentDidMount = () =>{
		this.props.appInitialization();
	}
	
	render=()=>{
		if(!this.props.isAppInitialized){
			return <Preloader />
		}
		return(
				<div className={styles.appWrapper}>
					<Header />
					<Nav sidebarData={this.props.store.getState().sidebar} />
					<div className={styles.appContent}>
						<Switch>
							<Route exact path="/" render={()=>{return(
								<Redirect to="/profile"/>)}}
							/>
							<Route path="/profile/:userId?" render={()=>{return(
								<ProfileContainer />)}}
							/>
							<Route path='/dialogs' render={()=>{return(
								<React.Suspense fallback={<Preloader />}>
									<DialogsContainer />
								</React.Suspense>
							)}} />
							<Route path='/users' render={()=>{return(
								<UsersContainer />)}}
							/>
							<Route path='/login' render={()=>{return(
								<Login />)}}
							/>
							<Route path='*' render={()=>{return(
								<div>page 404</div>)}}
							/>
						</Switch>
					</div>
				</div>
		)
	}
};

let mapStateToProps = (state) =>{
	return {
		isAppInitialized:getIsAppInitialized(state),
	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		appInitialization:()=>{
			dispatch(appInitialization());
		},
		getAuthDataThunkCreator:()=>{
			dispatch(getAuthDataThunkCreator());
		},
	}
}

let AppContainer = compose(
	connect(mapStateToProps,mapDispatchToProps)
)(App);


export default ()=>{
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppContainer store={store}/>
			</BrowserRouter>
		</Provider>
	)
}