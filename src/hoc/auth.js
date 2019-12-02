import React,{ Component } from 'react';
import { userActions } from "redux/actions"; 
import { connect } from 'react-redux';
import { Spin } from 'antd';

import store from "redux/store";

export default function(ComposedClass, reload){
    class AuthenticationCheck extends Component {

        state = {
            loading:true,
        }

    componentDidMount() {
        //this.deadline = new Date("apr 29, 2018 21:00:00").getTime();
 
        this.x = setInterval(this.count, 1000);
    }

        componentWillMount() {

            let tokenLs = localStorage.getItem('token');
            window.axios.defaults.headers.common['Authorization'] = tokenLs;
            
            store.dispatch(userActions.fetchUserData())
        }

        componentWillReceiveProps(nextProps) {

            this.setState({loading:false})

            if(!nextProps.user.isAuth){

                // Обработка ответа.
                if(nextProps.user.data !== null) {
                    //console.log(nextProps.user.data.response.data.status)
                }

                if(reload){
                    this.props.history.push('/login');
                }
            } else {
                if(reload === false) {

                    // Обработка ответа.
                    if(nextProps.user.data !== null) {
                        //console.log(nextProps.user.data.response.data.status)
                    }
                    this.props.history.push('/workers');
                }
            }
        }

        // return <div className="loader">Загрузка...</div>
        render(){
            if(this.state.loading){
                return <div className="loader"><Spin size="large" /></div>
            }
            return(
                <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
    }

    function mapStateToProps(state){
        return{
            user:state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck)
}