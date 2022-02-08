import {Component} from "react";
import {Link} from "react-router-dom";
import {Footer} from "../Common/Footer";

/**
 * Component of home page.
 */
export class Home extends Component<any, any> {
	private static introText(): JSX.Element {
		return (
			<>
				<p className="fs-5">
					Have you too much factories? Do you want keep track about your productions and consumptions?
					Do you want know how much electricity you are exactly using? Or manage you imports/exports between
					your factories?
				</p>
				<p className="fs-5">
					If you answered <strong>Yes</strong> to one of these question,
					then <strong className="text-primary">Satis-Factory Manager</strong> is the right tool for your
					factory management!
				</p>
			</>
		)
	}

	render(): JSX.Element {
		return (
			<>
				<div className="container p-5 pt-3">
					<div className="row">
						<div className="col-12">
							<p className="alert alert-primary">
								<i className="fa fa-tools pe-2"/>
								<strong>
									Help us test the brand new version of <a
									href="https://zechy.cz/satisfactory-beta/#/"
									className="btn btn-outline-light btn-sm">
									Satis-Factory Manager here!
								</a>
								</strong>
							</p>

							<h2 className="mt-4 mb-3">Production management</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="p-5 mb-4 border border-secondary">
								<h1 className="display-5 fw-bold">
									Satis-Factory Manager
								</h1>
								<h5>Online Satisfactory tool for managing your factory</h5>
								<hr/>

								{Home.introText()}
								<Link to="/manager" className="btn btn-primary me-2">
									Take me right in!
								</Link>
								<a href="https://github.com/JZechy/satisfactory-manager" target="_blank"
								   rel="noreferrer" className="btn btn-outline-secondary me-2">
									<i className="fab fa-github me-2"/>
									GitHub Repository
								</a>
								<a href="https://github.com/JZechy/satisfactory-manager/issues/new?assignees=&labels=&template=bug_report.md&title="
								   target="_blank" className="btn btn-outline-danger" rel="noreferrer">
									<i className="fas fa-bug me-2"/>
									Report a bug
								</a>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p className="alert alert-primary fs-6">
								<i className="fab fa-paypal me-2"/>
								If you like this tool, consider donating via <a
								href="https://www.paypal.com/donate?hosted_button_id=N7MWMNZ2VZJRN" target="_blank"
								rel="noreferrer" className="btn btn-sm btn-outline-warning">PayPal</a>
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<div className="p-3 fs-6 mb-2 border border-secondary h-100">
								<h3>Group your buildings</h3>
								<p>
									Write down your factories exactly as you have them build in game!
								</p>
								<ul>
									<li>See how much energy your factory is consuming</li>
									<li>See how much buildings you have</li>
									<li>See factory products and its over-consumption</li>
								</ul>
							</div>
						</div>
						<div className="col-4">
							<div className="p-3 mb-2 fs-6 border border-secondary h-100">
								<h3>Overall statistics</h3>
								<p>
									See overall statistics for your whole map!
								</p>
								<ul>
									<li>See how much you are producing</li>
									<li>See how much you are consuming</li>
									<li>See net & rate between production and consumption.</li>
								</ul>
							</div>
						</div>
						<div className="col-4">
							<div className="p-3 mb-2 fs-6 border border-secondary h-100">
								<h3>Factory Imports & Exports</h3>
								<p>
									Don't want lost track about transporting your products between factories?
								</p>
								<ul>
									<li>Setup import/export between factories.</li>
									<li>See at every factory where are you importing & exporting</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2 className="mt-4 mb-3">Power Management</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<div className="p-3 mb-2 fs-6 border border-secondary h-100">
								<h3>Power statistics</h3>
								<p>Don't lost track about your power consumption!</p>
								<ul>
									<li>See overall power statistics for your whole map</li>
								</ul>
							</div>
						</div>
						<div className="col-6">
							<div className="p-3 mb-2 fs-6 border border-secondary h-100">
								<h3>Know exactly where power goes</h3>
								<p>
									It's just don't about electricity for your production buildings.
								</p>
								<ul>
									<li>Write down every thinkable building that consumes power</li>
									<li>From Pipeline Pumps to Electric Locomotive</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}
