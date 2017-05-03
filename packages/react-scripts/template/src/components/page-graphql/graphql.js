import React from 'react'
import { string, func, bool, shape, object, arrayOf } from 'prop-types'
import Buffer from '../balanc3-components/buffer'
import { Input, Button } from 'semantic-ui-react'

const GraphQl = ({ address, setAddress, search, data }) => {
  const changehandler = e => setAddress(e.target.value)
  const clickhandler = () => {
    search(address)
  }
  const Tx = ({ sender, recipient, tokenStandard, parentTrace }) => (
    <div style={{ marginTop: '20px' }}>
      <p>sender:{sender}</p>
      <p>recipient:{recipient}</p>
      <p>tokenStandard:{tokenStandard}</p>
      <p>parentTrace:{parentTrace}</p>
    </div>
  )
  return (
    <Buffer>
      <h2>GraphQl Example</h2>
      <Input
        value={address}
        fluid
        onChange={changehandler}
        style={{ maxWidth: '600px' }}
        action={<Button onClick={clickhandler}> Search </Button>}
      />
      {data.getBySender &&
        data.getBySender.map((tx, i) => <Tx {...tx} key={i} />)}
      {data.loading && 'loading...'}
    </Buffer>
  )
}

GraphQl.propTypes = {
  address: string,
  setAddress: func,
  search: func,
  data: shape({
    loading: bool,
    error: object,
    getBySender: arrayOf(
      shape({
        sender: string,
        recipient: string,
        tokenStandard: string,
        parentTrace: string
      })
    )
  }).isRequired
}

export default GraphQl
