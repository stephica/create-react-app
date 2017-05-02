import {
  $simpleStoreCreated,
  $createSimpleStore,
  $simpleStoreInfo,
} from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case $simpleStoreCreated:
      return {
        ...state,
        hash: action.hash,
        contract: action.contract,
      };
    case $simpleStoreInfo:
      return {
        ...state,
        address: action.address,
        instance: action.instance,
      };
    default:
      return state;
  }
};

export const getSimpleStoreHash = state => state.simpleStore.hash || null;
export const getSimpleStoreContract = state =>
  state.simpleStore.contract || null;
export const getSimpleStoreAddress = state => state.simpleStore.address || null;
export const getSimpleStoreInstance = state =>
  state.simpleStore.instance || null;
