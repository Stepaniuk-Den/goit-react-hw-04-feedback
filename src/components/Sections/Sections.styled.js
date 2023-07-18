import styled from 'styled-components';
export const StyledSection = styled.section`
  & .thumb {
    flex-direction: row;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & h2 {
    font-size: 30px;
    margin: 10px auto;
  }

  & span {
    font-size: 18px;
    margin: 8px 0;
  }

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
    color: black;
    font-size: 16px;
    cursor: pointer;
    box-shadow: inset rgba(0, 0, 0, 0.25) 0px 14px 28px,
      inset rgba(0, 0, 0, 0.22) 0px 10px 10px;
    scale: 1;
  }
  & p {
    font-size: 18px;
    font-weight: bold;
  }
`;
