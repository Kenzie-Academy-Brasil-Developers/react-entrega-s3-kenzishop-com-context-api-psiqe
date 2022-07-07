import styled from "styled-components";

export const Container = styled.div`
  width: ${props=>props.width};
  background-color: ${props=>props.backgroundColor};
  margin-right: ${props=>props.marginRight};
  margin-left: ${props=>props.marginLeft};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  cursor: pointer;
`