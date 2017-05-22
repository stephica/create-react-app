import { connect } from 'react-redux'
import { getUserWallets } from './reducers'
import { getUserToken } from '../account/reducers'
import { showWalletModal } from '../wallet-modal/reducers'
import WalletPage from './page-wallets'
import { graphql } from 'react-apollo'
import { queryAddressesAndWallets } from '../../../queries'
function mapStateToProps(state, props) {
  return {
    _wallets: getUserWallets(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showWalletModal: () => dispatch(showWalletModal())
  }
}

const WalletPageWithData = graphql(queryAddressesAndWallets, {
  options: props => {
    return {
      variables: {
        token: getUserToken()
      }
    }
  }
})(WalletPage)

export default connect(mapStateToProps, mapDispatchToProps)(WalletPageWithData)
