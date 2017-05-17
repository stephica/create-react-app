import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { ApolloClient } from 'react-apollo'
import { reducer as formReducer } from 'redux-form'

import peopleReducer from '../components/page-redux-example/peopleContainer/reducers'
import getBySenderReducer from '../components/page-graphql/reducers'
import accountReducer from '../components/balanc3-components/account/reducers'
import sidebarReducer from '../components/balanc3-components/sidebar/reducers'

import graphqlLogic from '../components/page-graphql/logic'
import personLogic from '../components/page-redux-example/peopleContainer/logic'
import accountLogic from '../components/balanc3-components/account/logic'

const apolloClient = new ApolloClient()

const logicMiddleware = createLogicMiddleware([...personLogic, ...graphqlLogic, ...accountLogic])

const rootReducer = combineReducers({
  form: formReducer,
  people: peopleReducer,
  getBySender: getBySenderReducer,
  sidebar: sidebarReducer,
  account: accountReducer,
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
