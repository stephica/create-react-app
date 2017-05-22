import gql from 'graphql-tag'
import { graphqlUrl } from '../components/base/config'

export const queryAddressesAndWallets = gql`query ($token: String!) {
  userAddresses(token: $token) { _id, name, address, wallet } 
  userWallets(token: $token) { _id, name }
}`

export const addAddressMutation = gql`mutation ($data: addAddressInputType!) { addAddress(data: $data) { _id name address tokenContract tokenStandard } }`
export const mutateAddress = gql`mutation ($data: updateWalletsInputType!) { updateWallet(data: $data) { _id name } }`

export const call = (query, variables, onSuccess, onError) => {
  fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  })
    .then(res => res.json())
    .then(res => onSuccess(res.data))
    .catch(onError)
}
