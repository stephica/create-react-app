import React from 'react';
import { getTotalBalance } from '../logic';
import { string, array, object } from 'prop-types';
import { Divider, Card, Button } from 'semantic-ui-react';
import { Fill } from '../../../balanc3-components';
import { dispatch } from '../../../../utils';
import { showNewAddressModal } from '../../new-address-modal/reducers';
import styled from 'styled-components';
import AddressLine from './AddressLine';

const CardHeader = styled('span')`
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
`;

const WalletCard = ({ wallet, addresses }) => {
  const addNewWalletToGroup = () => {
    console.log('action:', wallet);
    dispatch(showNewAddressModal(wallet));
  };
  return (
    <Card fluid key={wallet._id}>
      <Card.Content>
        <Fill justifyContent="space-between">
          <CardHeader>{`${wallet.name} ( ${addresses.length} )`}</CardHeader>
          <span>Total: ${getTotalBalance(addresses)}</span>
        </Fill>
        <Divider />
        {addresses.map(addressInfo => (
          <AddressLine {...addressInfo} key={addressInfo._id} />
        ))}
        <Button
          basic
          color="green"
          fluid
          onClick={addNewWalletToGroup}
          style={{ cursor: 'pointer', marginTop: '20px' }}
        >
          {' '}+ Add Address
        </Button>
      </Card.Content>
    </Card>
  );
};

WalletCard.propTypes = {
  addresses: array,
  wallet: object,
  address: string,
};

export default WalletCard;
