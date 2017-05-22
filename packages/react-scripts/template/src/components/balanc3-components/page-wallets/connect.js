import { connect } from 'react-redux'
import { getUserWallets, requestAddressesAndWallets, getUserAddresses } from './reducers'
import { showWalletModal } from '../new-wallet-modal/reducers'
import WalletPage from './page-wallets'
import { compose, lifecycle } from 'recompose'
import { dispatch } from '../../../utils'

function mapStateToProps(state, props) {
  return {
    _wallets: getUserWallets(state),
    addresses: getUserAddresses(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showWalletModal: () => dispatch(showWalletModal()),
    getUserWallets: () => dispatch(requestAddressesAndWallets())
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillUpdate(nextProps) {
      // INITIAL UPDATE
      dispatch(requestAddressesAndWallets())
      console.log('Will Update:', nextProps)
    },
    componentWillMount() {
      // WHEN COMING FROM ANOTHER PAGE
      console.log('Will Mount:', this.props)
    }
  })
)(WalletPage)
