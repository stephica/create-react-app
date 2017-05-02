import { connect } from 'react-redux';
import { getEth, getAccounts } from '../reducers';

const mapStateToProps = (state, props) => ({
  eth: getEth(state),
  accounts: getAccounts(state),
});

export default connect(mapStateToProps)(({ accounts, eth, children }) =>
  children({ accounts, eth }));
