const isMatchingOrBothNull = (a, b) => a === b || (!a && !b);

export const getTotalBalance = addresses => {
  if (addresses) {
    const total = addresses
      .map(el => Number(el.balance))
      .reduce((a, b) => Number(a) + Number(b), 0)
      .toFixed(5);
    return total === 'NaN' ? 0 : total;
  } else {
    return 0;
  }
};
export const getGroupIds = (addresses = []) => {
  return addresses.map(el => el.wallet).reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
};

// export const getGroups = (addresses = [], wallets = []) => {
//   const _GroupedAddresses = getGroupIds(addresses)
//   const GroupedAddresses = _GroupedAddresses.map(name => addresses.filter(adr => adr.wallet === name || (!adr.wallet && !name)))
//   return GroupedAddresses
// }

export const getGroups = (addresses = [], wallets = []) => {
  const placeholderWalletForNull = { name: 'Ethereum' };
  const IdGroups = getGroupIds(addresses);
  return IdGroups.map(id => {
    return {
      wallet: id
        ? wallets.filter(wallet => isMatchingOrBothNull(wallet._id, id))[0]
        : placeholderWalletForNull,
      addresses: addresses.filter(info =>
        isMatchingOrBothNull(info.wallet, id)),
    };
  });
};
