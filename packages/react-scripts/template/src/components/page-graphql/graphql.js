import React from 'react'
import { string, func, bool, shape, object, arrayOf } from 'prop-types'
import Buffer from '../balanc3-components/buffer'
import { Input, Button } from 'semantic-ui-react'

const GraphQl = ({
  search,
  sender,
  data: { loading, getBySender, refetch }
}) => {
  const clickhandler = e => {
    search(e.target.previousElementSibling.value)
    refetch()
  }
  const Tx = ({ sender, recipient, tokenStandard, parentTrace }) => (
    <span>
      <p><b>sender</b>: {sender}</p>
      <p><b>recipient</b>: {recipient}</p>
      <p><b>tokenStandard</b>: {tokenStandard}</p>
      <p><b>parentTrace</b>: {parentTrace}</p>
    </span>
  )
  return (
    <Buffer>
      <h2>GraphQl Example</h2>
      <Input
        fluid
        style={{ maxWidth: '600px' }}
        action={<Button onClick={clickhandler}> Search </Button>}
      />
      <div style={{ marginTop: '20px' }}>
        {getBySender &&
          !loading &&
          getBySender.map((tx, i) => <Tx {...tx} key={i} />)}
        {loading && 'loading...'}

      </div>
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
