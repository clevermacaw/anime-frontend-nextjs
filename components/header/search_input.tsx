import styled from 'styled-components'

const Input = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  padding: 9px 9px 9px 38px;
  width: 100%;
  background: #eeeeee;
  border-radius: 30px;
  border: 0px;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border: 1px solid #80bdff;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translate(0, -50%);
  color: #bababa;
`

type Props = {
  placeholder: string
}

const SearchInput = ({ placeholder }: Props) => (
  <div className="search-input__wrapper">
    <Input placeholder={placeholder} />
    <SearchIcon>
      <i className="fa-solid fa-magnifying-glass" />
    </SearchIcon>
  </div>
)

export default SearchInput
