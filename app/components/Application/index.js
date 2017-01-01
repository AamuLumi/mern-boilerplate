import React, {Component} from 'react';

import FloatingMessage from '../FloatingMessage';

import './Application.less';

export default class Application extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="c-app">
				<div id="scroll-container">
					<div id="view-container">
						{this.props.children}
					</div>
				</div>
				<FloatingMessage />
			</div>
		);
	}
}
