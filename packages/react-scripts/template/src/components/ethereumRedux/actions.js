import { makeActionCreator } from '../../utils';

export const $web3Found = 'WEB3_FOUND';
export const web3Found = makeActionCreator(
  $web3Found,
  'accounts',
  'metaMask',
  'eth'
);
