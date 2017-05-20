import { connect } from 'react-redux'
import { getUserWallets } from './reducers'
import { getUserToken } from '../account/reducers'
import { showWalletModal } from '../wallet-modal/reducers'
import WalletPage from './page-wallets'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

const getBoth = gql`query ($token: String!) {
  userAddresses(token: $token) { _id, name, address, wallet } 
  userWallets(token: $token) { _id, name }
}`

const WalletPageWithData = graphql(getBoth, {
  options: props => {
    return {
      variables: {
        token: getUserToken()
      }
    }
  }
})(WalletPage)

export default connect(mapStateToProps, mapDispatchToProps)(WalletPageWithData)
