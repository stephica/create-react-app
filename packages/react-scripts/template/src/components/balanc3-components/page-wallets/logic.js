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

export const getGroups = (addresses = [], wallets = []) => {
  const _GroupedAddresses = getGroupNames(addresses)
  const GroupedAddresses = _GroupedAddresses.map(name => addresses.filter(adr => adr.wallet === name || (!adr.wallet && !name)))
  return GroupedAddresses
}
