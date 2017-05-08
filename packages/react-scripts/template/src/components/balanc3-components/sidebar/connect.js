import { connect } from 'react-redux'
import { getSidebarState, hideSidebar } from './reducers'
import Sidebar from './sidebar'

function mapStateToProps(state, props) {
  return {
    open: getSidebarState(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => {
      dispatch(hideSidebar())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
