import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  border-bottom: 1px solid black;

  h3 {
    padding: 0 1em 0 0;
  }

  .info {
    display: flex;
    justify-content: flex-start;
    gap: 2em;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  .cart-cover {
    max-width: 25%;
    object-fit: contain;
  }
`;
