import React, { Component }  from "react";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { workersActions } from "redux/actions";
//import { Message } from "components";
import { WorkersComponent } from "components";

import "./Workers.scss";

class Workers extends Component {

	render() {
		return (
			  <section className="WorkersPage">
    			<WorkersComponent/>
  			</section>
			)
	}
}
//export default Workers;

function mapStateToProps(state){
		console.log("this.props 11");
		console.log(this.props);
		console.log(state);

	return {
		profiles:state.profiles
	}
}

function mapDispatchToProps(dispatch) {
  return {
    workersActions: bindActionCreators(workersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workers);
