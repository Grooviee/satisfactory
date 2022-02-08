import './www/bootstrap.min.css';
import './www/App.css';
import './www/FontAwesome/css/all.min.css';

import {Component} from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import {default as Navbar} from "./Common/Navbar";
import {Home} from "./Page/Home";
import {Manager} from "./Page/Manager";
import {RouteComponentProps} from "react-router";

class App extends Component<RouteComponentProps, any> {
	render(): JSX.Element {
		return (
			<>
				<Navbar/>

				<Switch>
					<Route exact path="/" component={() => <Home/>}/>
					<Route exact path="/manager" component={() => <Manager/>}/>
				</Switch>
			</>
		);
	}
}

export default withRouter(App);
