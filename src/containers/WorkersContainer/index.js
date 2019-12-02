import React, { Component } from "react";
import { Row } from 'antd';
import { Spin } from 'antd';
import { Pagination } from 'antd';

//import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import { workersActions } from "redux/actions";

//import store from "redux/store";
import ProfileItem from '../../widgetsUI/profile_item';

import "./WorkersContainer.scss";

class WorkersContainer extends Component {
	  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChangePage = this.handleChangePage.bind(this);
  }

	componentWillMount() {

		this.props.dispatch(workersActions.fetchWorkersData(this.state.value));
	}

	renderItems = (profiles) => (
    profiles.data ?  
      profiles.data.map( item => (
        <ProfileItem {...item} key={item.id}/>
      ))
    :null
   )

	handleChangePage = function(page, pageSize) {

			//this.setState({value: page});
			this.props.dispatch(workersActions.fetchWorkersData(page));
		}


	render() {

		const isArrayEmpty = this.props.profiles.data;
 		let profiles = this.props.profiles;
		let list;

		if (isArrayEmpty.length > 0) {
			list = <div className='wsContaninerList'>{this.renderItems(profiles)}</div>
		} else {
			list = <div className='WorkersContainer-loader'><Spin size="large" /></div>
		}

		// Не поддерживается в текущей версии antd
		// <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
		// Cтилизация как в тестовом приложении, но плохо выглядит.
		//size="small"

		return (
			<div className='WorkersContainer'>
				<h1 className='WorkersContainer__title'>Сотрудники</h1>
				<Row gutter={16}>
					{list}
				</Row>
				<div className='WorkersContainer__pagination'>
				  <Pagination onChange={this.handleChangePage} {...this.props} defaultCurrent={1} total={120} showQuickJumper />
				</div>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		profiles:state.profiles
	}
}

// function mapDispatchToProps(dispatch) {
//   return {
//     workersActions: bindActionCreators(workersActions, dispatch)
//   }
// }

export default connect(mapStateToProps)(WorkersContainer);
// const WorkersContainerConnect = connect(mapStateToProps)(WorkersContainer);
// export default WorkersContainerConnect;