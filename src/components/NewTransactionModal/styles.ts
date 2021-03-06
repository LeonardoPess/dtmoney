import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border-radius: .25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    background: var(--green);
    color: #FFF;
    border: none;
    border-radius: .25rem;
    font-size: 1rem;
    font-weight: 600;

    transition: .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  red: '#E52e54',
  green: '#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #D7D7D7;
  border-radius: .25rem;
  background: ${(props) => props.isActive === true ?
  transparentize(.9, colors[props.activeColor])
  : 'transparent'};

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(.1, '#D7D7D7' )};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;

    font-size: 1rem;
    color: var(--text-title);
  }
`
