import styled from '@emotion/styled';

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 12px 24px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.backgroundColor};
  background-color: ${p => p.theme.colors.accentСolor};
  box-shadow: ${p => p.theme.boxShadow};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.backgroundColor};
  border-radius: 3px;
  overflow: hidden;
  & button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity ${p => p.theme.transition};
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 1;
    }
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  & input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    ::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
