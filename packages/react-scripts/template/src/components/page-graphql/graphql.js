import React from 'react';
import { string, func } from 'prop-types';
import Buffer from '../balanc3-components/buffer';

const GraphQl = ({ address, setAddress }) => (
  <Buffer>
    <h2>GraphQl</h2>
    <input
      value={address}
      onChange={e => setAddress(e.target.value)}
      style={{ width: '400px' }}
    />
  </Buffer>
);

GraphQl.propTypes = {
  address: string,
  setAddress: func,
};

export default GraphQl;
