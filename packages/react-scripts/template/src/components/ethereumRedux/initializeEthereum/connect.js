import { connect } from 'react-redux';
import InitializeEthereum from './initializeEthereum';
import { getEth, getAccounts } from '../reducers';

const mapStateToProps = (state, props) => ({
  eth: getEth(state),
  accounts: getAccounts(state),
});

export default connect(mapStateToProps)(InitializeEthereum);
