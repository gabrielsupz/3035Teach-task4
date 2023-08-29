import styled from 'styled-components'

export const StyledFormList = styled.div`
  box-shadow: 5px 10px #212121;
  width: 300px;
  border-radius: 8px;
  color: #c9c2c2;
  background: rgb(87, 84, 84);
  background: radial-gradient(
    circle,
    rgba(87, 84, 84, 1) 0%,
    rgba(33, 33, 33, 1) 100%
  );
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  label {
    font-size: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  input {
    padding: 10px 5px 10px 5px;
    border-radius: 10px;
    background-color: var(--input-bg-color);
    border: 1px solid #212121;
    color: var(--text-color);
    text-align: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  button:hover {
    border: 1px solid white;
    background-color: var(--button-color-hover);
    transition: all 0.5s;

    color: white;
  }
  button {
    width: 150px;
    color: var(--text-color);
    padding: 20px 10px 20px 10px;
    background-color: var(--button-color);
    border-radius: 10px;
    border: none;
    transition: all 0.5s;
    font-size: 18px;
  }
`
