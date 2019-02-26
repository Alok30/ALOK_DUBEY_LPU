import {connect} from 'react-redux';
import Details from '../components/deviceDetailsScreen';
const mapStateToProps =state=>state
export default connect(mapStateToProps)(Details);