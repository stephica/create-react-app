import React from 'react'
import { string, func } from 'prop-types'
import Buffer from '../balanc3-components/buffer'
import { Input, Button } from 'semantic-ui-react'

const GraphQl = ({ address, setAddress, search }) => {
  const changehandler = e => setAddress(e.target.value)
  const clickhandler = () => search(address)
  return (
    <Buffer>
      <h2>GraphQl</h2>
      <Input
        value={address}
        fluid
        onChange={changehandler}
        style={{ maxWidth: '600px' }}
        action={<Button onClick={clickhandler}> Search </Button>}
      />
    </Buffer>
  )
}

GraphQl.propTypes = {
  address: string,
  setAddress: func,
  search: func
}

export default GraphQl
