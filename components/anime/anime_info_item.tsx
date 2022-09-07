import styled from 'styled-components'
import SecondaryText from 'components/secondary_text'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

const Line = styled.div`
  border-top: 1px solid #d9d9d9;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
`

type Props = {
  label: string
  value: any
}

const AnimeInfoItem = ({ label, value }: Props) => (
  <Container>
    <Line />
    <SecondaryText
      styles={{ position: 'relative', paddingRight: 10, background: 'white' }}
    >
      {label}
    </SecondaryText>
    <SecondaryText
      styles={{
        position: 'relative',
        paddingLeft: 10,
        background: 'white',
        color: 'black',
      }}
    >
      {value}
    </SecondaryText>
  </Container>
)

export default AnimeInfoItem
