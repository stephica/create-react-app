import { connect } from 'react-redux'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import { getModalState, getEditWalletInfo, hideEditWalletModal } from './reducers'
import WalletModal from './edit-wallet-modal'
import { getUserToken } from '../account/reducers'
import { queryAddressesAndWallets, mutateAddress } from '../../../queries'
import { dispatch } from '../../../utils'

function mapStateToProps(state, props) {
  const walletInfo = getEditWalletInfo(state)
  return {
    active: getModalState(state),
    ...walletInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => dispatch(hideEditWalletModal())
  }
}

const walletModalWithUpdateMutation = graphql(mutateAddress, {
  props: ({ mutate }) => ({
    updateAddress: updatedAddress => {
      console.log('update mutation called', updatedAddress)
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...updatedAddress
          }
        },
        update: (a, b, c) => {
          debugger
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
          dispatch(hideEditWalletModal())
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
})

export default compose(walletModalWithUpdateMutation, connect(mapStateToProps, mapDispatchToProps))(WalletModal)

// export default connect(mapStateToProps, mapDispatchToProps)(WalletModal)
