import styled from 'styled-components'
import Title from 'components/Title'
import { separator } from 'utils'

type Props = {
  label: string
  value: number
}

const Container = styled.div`
  text-align: right;
`

const Label = styled.span`
  color: #a7a7a7;
`

const AnimeInfoNumberItem = ({ label, value }: Props) => (
  <Container>
    <Title>
      {separator(value)}
      <br />
      <Label>{label}</Label>
    </Title>
  </Container>
)

export default AnimeInfoNumberItem
