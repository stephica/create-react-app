import people from '../components/page-redux-example/peopleContainer/reducers'
import getBySender from '../components/page-graphql/reducers'
import account from '../components/balanc3-components/account/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { ApolloClient } from 'react-apollo'
import graphqlLogic from '../components/page-graphql/logic'
import personLogic from '../components/page-redux-example/peopleContainer/logic'
import loginLogic from '../components/balanc3-components/account/login-form/logic'

const logicMiddleware = createLogicMiddleware([...personLogic, ...graphqlLogic, ...loginLogic])
const apolloClient = new ApolloClient()

const rootReducer = combineReducers({
  people,
  getBySender,
  account,
  apollo: apolloClient.reducer()
  // add additional reducers here
})

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(logicMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
}
