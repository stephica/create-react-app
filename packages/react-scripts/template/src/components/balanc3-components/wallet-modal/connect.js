import { connect } from 'react-redux'
import { compose } from 'recompose'
import { gql, graphql } from 'react-apollo'
import { getModalState, getWalletInfo, hideWalletModal } from './reducers'
import WalletModal from './wallet-modal'
import { getUserToken } from '../account/reducers'

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

const addAddressMutation = gql`mutation ($data: addAddressInputType!) { addAddress(data: $data) { _id name address tokenContract tokenStandard } }`
const walletModalWithAddressMutation = graphql(addAddressMutation, {
  props: ({ mutate }) => ({
    addAddress: addressInfo => {
      console.log('add mutation called', addressInfo)
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...addressInfo
          }
        }
      })
        .then(res => {
          console.log('response from mutation:', res)
          // dispatch(userReceived(res.data.updateUserAuth))
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
})

const updateAddressMutation = gql`mutation ($data: updateWalletsInputType!) { updateWallet(data: $data) { _id name } }`
const walletModalWithUpdateMutation = graphql(updateAddressMutation, {
  props: ({ mutate }) => ({
    updateAddress: addressInfo => {
      console.log('update mutation called', addressInfo)
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...addressInfo
          }
        }
      })
        .then(res => {
          console.log('response from mutation:', res)
          // dispatch(userReceived(res.data.updateUserAuth))
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
})

export default compose(walletModalWithAddressMutation, walletModalWithUpdateMutation, connect(mapStateToProps, mapDispatchToProps))(WalletModal)

// export default connect(mapStateToProps, mapDispatchToProps)(WalletModal)
