import {connect} from 'react-redux'
import config from '../components/configuration';
const mapStateToProps =state=>state;
export default connect(mapStateToProps)(config)