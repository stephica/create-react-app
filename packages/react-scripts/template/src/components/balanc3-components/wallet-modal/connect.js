import { connect } from 'react-redux'
import { compose } from 'recompose'
import { graphql, gql } from 'react-apollo'
import { getModalState, getWalletInfo, hideWalletModal } from './reducers'
import WalletModal from './wallet-modal'
import { getUserToken } from '../account/reducers'
import { queryAddressesAndWallets, addAddressMutation } from '../../../queries'
import { dispatch } from '../../../utils'

function mapStateToProps(state, props) {
  const walletInfo = getWalletInfo(state)
  return {
    active: getModalState(state),
    ...walletInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => dispatch(hideWalletModal())
  }
}

const walletModalWithAddressMutation = graphql(gql`${addAddressMutation}`, {
  props: ({ mutate }) => ({
    addAddress: newAddressInfo => {
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...newAddressInfo
          }
        },
        refetchQueries: [
          {
            query: queryAddressesAndWallets,
            variables: { token: getUserToken() }
          }
        ]
      })
        .then(res => {
          console.log('response from mutation:', res)
          dispatch(hideWalletModal())
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
})

export default compose(walletModalWithAddressMutation, connect(mapStateToProps, mapDispatchToProps))(WalletModal)

// export default connect(mapStateToProps, mapDispatchToProps)(WalletModal)
