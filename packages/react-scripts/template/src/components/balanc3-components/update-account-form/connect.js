import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { logout, getUserToken, userReceived, getUser } from '../account/reducers'
import AccountForm from './update-account-form'
import { gql, graphql } from 'react-apollo'
import { showLoginModal } from '../account/modal/reducers'
import { reduxForm, formValueSelector } from 'redux-form'
import { dispatch } from '../../../utils'
const form = 'update-account'
const selector = formValueSelector(form)

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogin: e => {
      e.preventDefault()
      dispatch(showLoginModal())
    },
    dispatchLogout: () => dispatch(logout())
  }
}

function mapStateToProps(state, props) {
  // console.log('redux user', getUser(state))
  // console.log('form user', selector(state, 'user'))
  const reduxUser = getUser(state)
  const formUser = selector(state, 'user')
  return {
    user: {
      ...reduxUser,
      ...formUser
    },
    name: selector(state, 'name')
  }
}

const userMutation = gql`mutation ($data: updateUserAuthsInputType!) { updateUserAuth(data: $data){ name, email, country, fiatCurrency } }`

const AccountFormWithMutation = graphql(userMutation, {
  props: ({ mutate }) => ({
    submitHandler: user => {
      console.log('mutation called', user)
      try {
        delete user.token
        delete user.__typename
        delete user._id
        delete user.createdDate
        delete user.wallets
        delete user.addresses
      } catch (err) {
        console.log('error caught:', err)
      }
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...user
          }
        }
      })
        .then(res => {
          console.log('response from mutation:', res)
          dispatch(userReceived(res.data.updateUserAuth))
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
})

export default compose(
  AccountFormWithMutation,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form }),
  lifecycle({
    componentWillUpdate(nextProps) {
      // INITIAL UPDATE
      console.log('Will Update:', nextProps.user)
      if (nextProps.user.email && !nextProps.initialized) {
        console.log('Initializing', nextProps.user)
        nextProps.initialize({ user: nextProps.user })
      }
    },
    componentWillMount() {
      // WHEN COMING FROM ANOTHER PAGE
      console.log('Will Mount:', this.props.user)
      if (this.props.user.email && !this.props.initialized) {
        this.props.initialize({ user: this.props.user })
      }
    }
  })
)(AccountForm)
