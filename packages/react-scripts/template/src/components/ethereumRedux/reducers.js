import { $web3Found } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case $web3Found:
      return {
        ...state,
        accounts: action.accounts,
        metaMask: action.MetaMask,
        eth: action.eth,
      };
    default:
      return state;
  }
};

export const getEth = state => state.ethereum.eth;
export const getAccounts = state => state.ethereum.accounts;
