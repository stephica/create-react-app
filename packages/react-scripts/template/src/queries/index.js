import gql from 'graphql-tag'

export const queryAddressesAndWallets = gql`query ($token: String!) {
  userAddresses(token: $token) { _id, name, address, wallet } 
  userWallets(token: $token) { _id, name }
}`

export const addAddressMutation = gql`mutation ($data: addAddressInputType!) { addAddress(data: $data) { _id name address tokenContract tokenStandard } }`
export const updateAddressMutation = gql`mutation ($data: updateWalletsInputType!) { updateWallet(data: $data) { _id name } }`
