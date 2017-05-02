import { PropTypes } from 'react';
import { compose, lifecycle, setPropTypes } from 'recompose';
import { web3Found } from '../actions';
import Eth from 'ethjs';

export default compose(
  setPropTypes({
    store: PropTypes.object.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      let {
        store,
        accounts,
        eth,
        useTestRPC,
        useLocalFile,
        occurance = 0,
      } = this.props;
      /*
      // Check periodically for new identity, incase they download metamask -- stop after 100
      */
      const checkForWeb3 = function() {
        if (occurance < 100) {
          occurance++;
          if (useLocalFile) {
            console.log('Ethereum Redux - attaching to local testrpc.js file');
            var eth = new Eth(TestRPC.provider());
            eth.accounts().then(accounts => {
              occurance = 101; // stops auto update
              store.dispatch(web3Found(accounts, true, eth));
            });
          } else if (useTestRPC) {
            console.log('Ethereum Redux - attaching to local TestRPC');
            var web3_provider = 'http://localhost:8545';
            eth = new Eth(new Eth.HttpProvider(web3_provider));
            eth.accounts().then(accounts => {
              occurance = 101; // stops auto update
              store.dispatch(web3Found(accounts, true, eth));
            });
          } else if (typeof window.web3 !== 'undefined') {
            if (
              !eth ||
              accounts.toString() !== window.web3.eth.accounts.toString()
            ) {
              console.log('Ethereum Redux - updating from Mist or Meta Mask');
              accounts = window.web3.eth.accounts;
              eth = new Eth(window.web3.currentProvider);
              store.dispatch(web3Found(accounts, true, eth));
            }
          } else if (!eth) {
            console.log('Fall back to Infura');
            eth = new Eth(new Eth.HttpProvider('https://mainnet.infura.io'));
            store.dispatch(web3Found(accounts, false, eth));
          }
          window.setTimeout(checkForWeb3, 10 * 300); // checks every 5 seconds
        }
      };
      checkForWeb3();
    },
  })
)(({ children }) => children);
