import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border: 1px dashed #fff;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 15px;
  margin-right: 20px;


  :hover {
    color: 	#050100;
    border-color: #050100;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  }
`;