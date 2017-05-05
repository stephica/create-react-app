import people from '../components/page-redux-example/peopleContainer/reducers'
import getBySender from '../components/page-graphql/reducers'
import loginModal from '../components/balanc3-components/account/modal/reducers'
import account from '../components/balanc3-components/account/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { ApolloClient } from 'react-apollo'
import graphqlLogic from '../components/page-graphql/logic'
import personLogic from '../components/page-redux-example/peopleContainer/logic'
import loginLogic from '../components/balanc3-components/account/login-form/logic'

const logicMiddleware = createLogicMiddleware([...personLogic, ...graphqlLogic, ...loginLogic])
const apolloClient = new ApolloClient()

// Allows Redux Devtools
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const rootReducer = combineReducers({
  people,
  getBySender,
  loginModal,
  account,
  apollo: apolloClient.reducer()
  // add additional reducers here
})

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logicMiddleware))
    // window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
