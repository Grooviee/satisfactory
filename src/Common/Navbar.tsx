import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

class Navbar extends Component<RouteComponentProps, any> {
	render(): JSX.Element {
		let homeActive = this.props.location.pathname === "/";
		let managerActive = this.props.location.pathname === "/manager";

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<a href="." className="navbar-brand">
						Satis-Factory Manager
					</a>
					<button
						className="navbar-toggler"
						data-bs-toggle="collapse"
						data-bs-target="#navbarMenu"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarMenu">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className={`nav-link ${homeActive ? "active" : ""}`}
									to="."
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link ${managerActive ? "active" : ""}`}
									to="manager"
								>
									Factory Manager
								</Link>
							</li>
						</ul>

						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									href="https://github.com/JZechy/satisfactory-manager"
									target="_blank"
									className="nav-link"
									rel="noreferrer"
								>
									<i className="fab fa-github me-2" />
									GitHub
								</a>
							</li>
							<li className="nav-item">
								<a
									href="https://github.com/JZechy/satisfactory-manager/issues/new?assignees=&labels=&template=bug_report.md&title="
									className="nav-link"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fas fa-bug me-2" />
									Report a bug
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default withRouter(Navbar);
