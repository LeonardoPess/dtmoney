import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;

    background: var(--shape);
    border-radius: .25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      display: block;

      font-size:2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: white;
    }
  }
`;
