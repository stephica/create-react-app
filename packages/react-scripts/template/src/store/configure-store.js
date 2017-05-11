import people from '../components/page-redux-example/peopleContainer/reducers'
import getBySender from '../components/page-graphql/reducers'
import account from '../components/balanc3-components/account/reducers'
import sidebar from '../components/balanc3-components/sidebar/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { ApolloClient } from 'react-apollo'
import { reducer as formReducer } from 'redux-form'
import graphqlLogic from '../components/page-graphql/logic'
import personLogic from '../components/page-redux-example/peopleContainer/logic'
import loginLogic from '../components/balanc3-components/account/login-form/logic'
import signupLogic from '../components/balanc3-components/account/signup-form/logic'
import accountLogic from '../components/balanc3-components/account/logic'

const logicMiddleware = createLogicMiddleware([...personLogic, ...graphqlLogic, ...loginLogic, ...signupLogic, ...accountLogic])
const apolloClient = new ApolloClient()

const rootReducer = combineReducers({
  people,
  getBySender,
  account,
  sidebar,
  form: formReducer,
  apollo: apolloClient.reducer()
  // add additional reducers here
})

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(applyMiddleware(logicMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
      : compose(applyMiddleware(logicMiddleware))
  )
}
