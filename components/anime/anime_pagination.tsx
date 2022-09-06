import styled from 'styled-components'
import PrimaryText from 'components/primary_text'

type Props = {
  page: number
}

const ActionButton = styled.button`
  background: #ebebeb;
  border-radius: 5px;
  padding: 6px 8px;
  border: none;
  width: 32px;
  height: 32px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const AnimePagination = ({ page }: Props) => (
  <Container>
    <ActionButton>
      <i className="fa-solid fa-arrow-left" />
    </ActionButton>
    <PrimaryText styles={{ padding: '0 12px', fontWeight: 600 }}>
      {page}
    </PrimaryText>
    <ActionButton>
      <i className="fa-solid fa-arrow-right" />
    </ActionButton>
  </Container>
)

export default AnimePagination
