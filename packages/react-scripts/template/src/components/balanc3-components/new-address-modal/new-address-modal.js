import React from 'react';
import { bool, func, string, object } from 'prop-types';
import { Card, Form, Button } from 'semantic-ui-react';
import {
  ReduxFormInput,
  SmallModal,
  ReduxFormDropdown,
} from '../../balanc3-components';

class NewAddressModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.address || '',
      name: props.name || '',
      wallet: props.wallet || '',
      tokenStandard: 'eth',
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ ...props });
  }

  render() {
    const { active, hide, addAddress, data } = this.props;
    const { address, name, wallet = {} } = this.state;
    const { userWallets = [] } = data;
    const walletsForSemantic = userWallets.map(wallet => {
      return {
        key: wallet._id,
        text: wallet.name,
        value: wallet._id,
      };
    });

    const handleclick = e => {
      e.preventDefault();
      addAddress({
        name: this.state.name,
        wallet: this.state._id,
        address: this.state.address,
      });
    };
    return (
      <SmallModal open={active} onClose={hide}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Add New Address
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Form>
              <ReduxFormInput
                overheadLabel="New Address"
                input={{
                  value: address,
                  onChange: e => this.setState({ address: e.target.value }),
                }}
              />
              <ReduxFormInput
                overheadLabel="Address Name"
                input={{
                  value: name,
                  onChange: e => this.setState({ name: e.target.value }),
                }}
              />
              <ReduxFormDropdown
                overheadLabel="Choose Groop"
                options={walletsForSemantic}
                input={{
                  value: wallet && wallet._id,
                  onChange: newValue => this.setState({ wallet: newValue }),
                }}
              />
              <Button onClick={handleclick}>Save</Button>
            </Form>
          </Card.Content>
        </Card>
      </SmallModal>
    );
  }
}

NewAddressModal.propTypes = {
  active: bool,
  hide: func,
  addAddress: func,
  address: string,
  wallet: object,
  name: string,
  data: object,
};

export default NewAddressModal;
