import { connect } from 'react-redux'
import { getUser } from '../account/reducers'
import Header from './header'

function mapStateToProps(state, props) {
  const user = getUser(state)
  return {
    user: user.email
  }
}

export default connect(mapStateToProps, null)(Header)
