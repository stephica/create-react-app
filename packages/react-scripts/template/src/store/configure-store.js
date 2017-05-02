import people from '../components/page-redux-example/peopleContainer/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import personLogic from '../components/page-redux-example/peopleContainer/logic'

// Allows Redux Devtools
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const logicMiddleware = createLogicMiddleware(personLogic)
const middleware = applyMiddleware(logicMiddleware)
const enhancer = composeEnhancers(middleware)

const rootReducer = combineReducers({
  people
  // add additional reducers here
})

export default initialState => {
  return createStore(rootReducer, initialState, enhancer)
}
