import { connect } from 'react-redux'
import { getUserWallets } from '../account/reducers'
// import { showSidebar, hideSidebar, getSidebarState } from '../sidebar/reducers'
// import { showLoginModal } from '../account/modal/reducers'
import WalletPage from './page-wallets'

function mapStateToProps(state, props) {
  return {
    wallets: getUserWallets(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletPage)
