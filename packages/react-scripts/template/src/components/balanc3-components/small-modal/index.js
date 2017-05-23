import styled from 'styled-components'
import { Modal } from 'semantic-ui-react'

const SmallModal = styled(Modal)`
  &&&{
    text-align: center;
    @media (min-width: ${({ theme }) => theme.small}) {
      width: 400px;
      padding: 40px;
      margin-left: -200px; // only left to not mess with Semantic UI
    }
  }
`
