import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0; 
}
.errors{
  color: #c23616;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #f3c624 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 13px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #f3c624;
    border-radius: 10px;
    border: 3px solid #f9ca24;
  }
`