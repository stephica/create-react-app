import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { logout, getUserToken, userReceived } from '../account/reducers'
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
  return {
    user: selector(state, 'user'),
    name: selector(state, 'name')
  }
}

const userMutation = gql`mutation ($data: updateUserAuthsInputType!) { updateUserAuth(data: $data){ name, email, country, fiatCurrency } }`

const AccountFormWithMutation = graphql(userMutation, {
  props: ({ mutate }) => ({
    submitHandler: user => {
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
      const { country, email, fiatCurrency, name } = user
      console.log('new country:', country)
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
          // TODO:  Dispatch user recieved action
        })
        .catch(err => {
          debugger
        })
    }
  })
})

const userQuery = gql`
  query ($token: String) {
    userAuths(token: $token) {
      _id, 
      name, 
      email, 
      createdDate, 
      country, 
      fiatCurrency 
    } 
  }
`
const AccountFormWithData = graphql(userQuery, {
  options: {
    variables: {
      token: getUserToken() || ''
    }
  }
})

// export default connect(mapStateToProps, mapDispatchToProps)(AccountFormWithData)
export default compose(
  AccountFormWithData,
  AccountFormWithMutation,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form }),
  lifecycle({
    componentDidUpdate() {
      if (this.props.data.userAuths && !this.props.initialized) {
        this.props.initialize({ user: this.props.data.userAuths })
      }
    }
  })
)(AccountForm)
