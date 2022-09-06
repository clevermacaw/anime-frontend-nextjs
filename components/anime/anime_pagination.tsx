import { useMemo } from 'react'
import styled from 'styled-components'
import PrimaryText from 'components/primary_text'

type Props = {
  page: number
  total: number
  perPage: number
  onChange: (newPage: number) => void
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

const AnimePagination = ({ page, total, perPage, onChange }: Props) => {
  const numberOfPages = useMemo(
    () => Math.ceil(total / perPage),
    [total, perPage]
  )

  const handlePrev = () => {
    if (page > 1) onChange(page - 1)
  }

  const handleNext = () => {
    if (page < numberOfPages) onChange(page + 1)
  }

  return (
    <Container>
      <ActionButton onClick={handlePrev}>
        <i className="fa-solid fa-arrow-left" />
      </ActionButton>
      <PrimaryText styles={{ padding: '0 12px', fontWeight: 600 }}>
        {page}
      </PrimaryText>
      <ActionButton onClick={handleNext}>
        <i className="fa-solid fa-arrow-right" />
      </ActionButton>
    </Container>
  )
}

export default AnimePagination
