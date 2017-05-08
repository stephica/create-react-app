import { connect } from 'react-redux'
import { getUser } from '../account/reducers'
import { showSidebar } from '../sidebar/reducers'
import Header from './header'

function mapDispatchToProps(dispatch) {
  return {
    showSidebar: () => {
      dispatch(showSidebar())
    }
  }
}

function mapStateToProps(state, props) {
  const user = getUser(state)
  return {
    user: user.email
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
