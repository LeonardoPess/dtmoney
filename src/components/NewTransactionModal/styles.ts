import styled from 'styled-components';

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
