import { ReactNode } from 'react'
import styled from 'styled-components'

const SecondaryText = styled.h1`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--color-grey);
  margin: 0;
`

type Props = {
  styles?: Record<string, any>
  children: ReactNode
}

const SecondaryTextWrapper = ({ styles = {}, children }: Props) => (
  <SecondaryText style={styles}>{children}</SecondaryText>
)

export default SecondaryTextWrapper
