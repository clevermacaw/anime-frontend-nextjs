import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
`

const SearchInput = styled.input`
  width: 100%;
  background: white;
  border-radius: 32px;
  padding: 24px 36px;
  outline: none;
  border: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const InputWrapper = styled.div`
  position: absolute;
  top: 238px;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(100% - 20px);

  @media screen and (min-width: 768px) {
    width: 618px;
  }

  @media screen and (max-width: 768px) {
    width: 372px;
    top: 178px;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: -24px;
  color: white;

  &:hover {
    cursor: pointer;
    color: #dfdede;
  }
`

type Props = {
  show: boolean
  onClose: () => void
}

const SearchModal = ({ show, onClose }: Props) => (
  <Overlay style={{ opacity: show ? 1 : 0, height: show ? '100vh' : 0 }}>
    <Wrapper>
      <InputWrapper>
        <InputContainer>
          <SearchInput placeholder="You can search for ‘Kyoukai no Kanata’ for example" />
          <CloseIcon onClick={onClose}>
            <i className="fa-solid fa-xmark" />
          </CloseIcon>
        </InputContainer>
      </InputWrapper>
    </Wrapper>
  </Overlay>
)

export default SearchModal
