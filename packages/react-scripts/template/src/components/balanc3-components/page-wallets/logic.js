import { getUserToken } from '../../balanc3-components/account/reducers'
import { graphqlUrl } from '../../base/config'
import { createLogic } from 'redux-logic'
import { $requestAddressesAndWallets } from './reducers'

const requestWallets = createLogic({
  type: $requestAddressesAndWallets,
  process({ getState, action }, dispatch, done) {
    console.log('GET_BY_SENDER action in logic', action)
    fetch(graphqlUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: 'query ($token: String!) { userAddresses(token: $token) { _id, name, address, wallet } userWallets(token: $token) { _id, name } }',
        variables: {
          token: getUserToken() || ''
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log('wallets and addresses recieved', res)
      })
    done()
  }
})

export const getTotalBalance = addresses => {
  if (addresses) {
    return addresses.map(el => Number(el.balance)).reduce((a, b) => Number(a) + Number(b), 0).toFixed(5)
  } else {
    return 0
  }
}
export const getGroupNames = (addresses = []) => {
  return addresses.map(el => el.wallet).reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b)
    return a
  }, [])
}

export const getGroups = (addresses, wallets) => {
  const _GroupedAddresses = getGroupNames(addresses)
  const GroupedAddresses = _GroupedAddresses.map(name => addresses.filter(adr => adr.wallet === name || (!adr.wallet && !name)))
  return GroupedAddresses
}

export default requestWallets
