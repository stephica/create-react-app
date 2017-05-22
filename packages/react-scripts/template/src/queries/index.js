import { graphqlUrl } from '../components/base/config'

export const queryAddressesAndWallets = `query ($token: String!) {
  userAddresses(token: $token) { _id, name, address, wallet } 
  userWallets(token: $token) { _id, name }
}`

export const addAddressMutation = 'mutation ($data: addAddressInputType!) { addAddress(data: $data) { _id name address tokenContract tokenStandard } }'
export const mutateAddress = 'mutation ($data: updateWalletsInputType!) { updateWallet(data: $data) { _id name } }'

export const graphCall = (query, variables, onSuccess, onError) => {
  fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'mutation ($data: updateWalletsInputType!) { updateWallet(data: $data) { _id name }}',
      variables: {
        data: variables
      }
    })
  })
    .then(res => res.json())
    .then(res => {
      if (!res.error) {
        onSuccess(res.data)
      } else {
        onError(res.error)
      }
    })
    .catch(onError)
}

fetch(graphqlUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: 'query ($token: String) { userAuths(token: $token) {_id, name, email, createdDate, country, fiatCurrency } }',
    variables: {
      // token: getUserToken() || ''
    }
  })
})
    .then(res => res.json())
    .then(res => {
      // dispatch(userReceived(res.data.userAuths))
    })
