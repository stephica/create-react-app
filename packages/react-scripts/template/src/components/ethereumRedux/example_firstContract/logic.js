import { createLogic } from 'redux-logic';
import { getEth, getAccounts } from '../reducers';
import {
  $createSimpleStore,
  simpleStoreCreated,
  $setSimpleStoreValue,
} from './actions';
import { getSimpleStoreInstance } from './reducers';

// CREATED BY TRUFFLE ON DEPLOY OF SIMPLESTORE IN src/truffle/contracts -- this will change each time run
export const SimpleStoreAddr = '0x3a5da040ac5a785cb11e1c07fc59a84aab6edc68';
export const SimpleStoreBytecode = '606060405234610000575b6090806100176000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460405780636d4ce63c14605a575b6000565b3460005760586004808035906020019091905050607a565b005b3460005760646085565b6040518082815260200191505060405180910390f35b806000819055505b50565b600060005490505b9056';
export const SimpleStoreABI = [
  {
    constant: false,
    inputs: [{ name: '_value', type: 'uint256' }],
    name: 'set',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'get',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
];

const createSimpleStore = createLogic({
  type: $createSimpleStore,
  process({ getState, action }, dispatch, done) {
    const state = getState();
    const eth = getEth(state);
    if (eth) {
      var SimpleStore = eth.contract(SimpleStoreABI, SimpleStoreBytecode, {
        from: getAccounts(state)[0],
        gas: 300000,
      });
      SimpleStore.new({}).then(function(txHash) {
        console.log('hash', txHash);
        dispatch(simpleStoreCreated(txHash, SimpleStore));
        done();
      });
    } else {
      done();
    }
  },
});

const setSimpleStoreValue = createLogic({
  type: $setSimpleStoreValue,
  process({ getState, action }, dispatch, done) {
    const state = getState();
    const instance = getSimpleStoreInstance(state);
    console.log('value', action.value);
    instance
      .set(action.value)
      .then(setTxHash => {
        debugger;
        // TODO: setHappened - pass in Hash
      })
      .catch(err => {
        // TODO: setError
      });
  },
});

export default [createSimpleStore, setSimpleStoreValue];
