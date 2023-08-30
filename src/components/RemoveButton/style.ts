import styled from 'styled-components'

export const RemoveButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 0px solid transparent;
  background-color: rgba(100, 77, 237, 0.08);
  border-radius: 10px;
  border: 1px solid #212121;
  transition: all 0.5s;

  &:hover {
    transition: all 0.5s;
    box-shadow: 3.4px 2.5px 4.9px rgba(0, 0, 0, 0.025),
      8.6px 6.3px 12.4px rgba(0, 0, 0, 0.035),
      17.5px 12.8px 25.3px rgba(0, 0, 0, 0.045),
      36.1px 26.3px 52.2px rgba(0, 0, 0, 0.055),
      99px 72px 143px rgba(0, 0, 0, 0.08);
    background-color: #ec4a4a;
    border: 1px solid white;

    path {
      fill: white;
    }
  }

  position: relative;
  display: inline-block;
`
