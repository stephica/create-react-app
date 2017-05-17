import { connect } from 'react-redux'
import { getUserWallets } from './reducers'
import { getUserToken } from '../account/reducers'
import WalletPage from './page-wallets'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

const getWallets = gql`query ($token: String!) { userWallets(token: $token) { _id, name } }`
// const getAddresses = gql`query ($token: String!) { userAddresses(token: $token) { _id, name, address, wallet } }`

const WalletPageWithData = graphql(getWallets, {
  options: props => {
    return {
      variables: {
        token: getUserToken()
      }
    }
  }
})(WalletPage)

// const WalletPageWithAddressData = graphql(getAddresses, {
//   options: props => {
//     return {
//       variables: {
//         token: getUserToken()
//       }
//     }
//   }
// })(WalletPage)

export default connect(mapStateToProps, mapDispatchToProps)(WalletPageWithData)
