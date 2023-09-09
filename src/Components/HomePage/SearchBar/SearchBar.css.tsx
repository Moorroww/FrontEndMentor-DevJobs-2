import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.fontMain};
  margin-inline: 2.4rem;
  border-radius: 0.6rem;
  height: 8rem;
  position: relative;
  top: -4rem;
  padding: 1.6rem 2rem;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  & > label {
    /* background-color: red; */
    margin-right: 2.4rem;
  }

  &::placeholder {
    color: #8c9096;
  }

  @media (width>767px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledMainInputLabel = styled.label`
  display: flex;
  align-items: center;

  & img {
    display: none;
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.6rem;
  }

  @media (width>767px) {
    height: 8rem;
    padding-right: 5rem;
    border-right: 1px solid ${({ theme }) => theme.searchBorder};

    & img {
      display: flex;
    }
  }
`;

export const StyledLocationInputLabel = styled.label`
  display: none;
  align-items: center;

  & img {
    display: none;
    width: 1.672rem;
    height: 2.389rem;
    margin-right: 1.6rem;
  }

  & input {
    max-width: 13.5rem !important;
  }

  @media (width>767px) {
    display: flex;
    height: 8rem;
    padding-right: 5rem;
    border-right: 1px solid ${({ theme }) => theme.searchBorder};

    & img {
      display: flex;
    }
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: none;

  input {
    background-color: red;
  }

  & span {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.fontMain};
    cursor: pointer;
  }

  @media (width>767px) {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const StyledInput = styled.input`
  background-color: inherit;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.6rem;
  /* max-width: 10.4rem; */
  text-overflow: ellipsis;
`;

export const StyledButtonsBox = styled.button`
  background-color: inherit;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-self: end;

  @media (width>767px) {
    gap: 2.8rem;
  }
`;

export const StyledFilterButton = styled.button`
  background-color: inherit;
  color: ${({ theme }) => theme.white};
  padding-inline: 1.4rem;
  padding-block: 1.4rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 0.5rem;
  transition: 0.2s all ease;

  &:hover {
    cursor: pointer;
  }

  @media (width>767px) {
    display: none;
  }
`;

export const StyledSearchButton = styled.button`
  background-color: ${({ theme }) => theme.accentViolet};
  color: ${({ theme }) => theme.white};
  padding-inline: 1.4rem;
  padding-block: 1.6rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 0.5rem;
  transition: 0.2s all ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentLightViolet};
    cursor: pointer;
  }

  & span {
    display: none;
    font-weight: bold;
  }
  @media (width>767px) {
    & img {
      display: none;
    }

    & span {
      display: flex;
    }
  }
`;
