import ProfileForm from "../components/ProfileForm";
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(ProfileForm)
