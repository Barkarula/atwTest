import React, { Component } from "react";
import { Spin } from 'antd';

import { connect } from "react-redux";
import { workersActions } from "redux/actions";

import ProfileView from '../../widgetsUI/profile_view';

import "./WorkerContainer.scss";

class WorkerContainer extends Component {

	componentWillMount() {

		this.props.dispatch(workersActions.fetchSingleWorkerData(this.props.match.params.id));
	}

	render() {

		const isObjEmpty = this.props.profile.data;
		const isArrayEmpty = this.props.profile.data;
		const profile = this.props.profile.data;
		let profileView;

		if ( Object.keys(isObjEmpty).length > 0 || isArrayEmpty.length > 0) {

			// Обработка на случай, если мы зашли на страницу другого сотрудника, а пропсы еще не пришли и
			// store не поменялся ,поэтому следуеть показать лоадер.
			if (profile.id === parseInt(this.props.match.params.id)) {
				profileView = <div className='wsSingleContaninerList'><ProfileView { ...profile }/></div>
			} else {
				profileView = <div className='WorkerContainer-loader'><Spin size="large" /></div>
			}
		} else {
			profileView = <div className='WorkerContainer-loader'><Spin size="large" /></div>
		}

		return (
			<div className='WorkerContainer'>
				{profileView}
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		profile:state.profile
	}
}

export default connect(mapStateToProps)(WorkerContainer);