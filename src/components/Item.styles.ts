import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  overflow: hidden;
  border-radius: 1em;

  .item-cover {
    display: grid;
    place-items: center;
    padding: 1em;

    img {
      max-height: 250px;
      object-fit: contain;
    }
  }

  .item-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;

    .item-title {
    }
  }

  button {
    width: 100%;
  }
`;
