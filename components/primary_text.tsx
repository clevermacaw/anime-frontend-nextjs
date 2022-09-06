import { ReactNode } from 'react'
import styled from 'styled-components'

const PrimaryText = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: var(--color-black);
  margin: 0;
`

type Props = {
  styles?: Record<string, any>
  children: ReactNode
}

export default ({ styles = {}, children }: Props) => (
  <PrimaryText style={styles}>{children}</PrimaryText>
)
