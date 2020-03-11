import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #DFE3E5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #DFE3E5;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .center {
    margin: auto;
    width: 50%;
    min-height: 100%;
    padding: 10px;
    background-color: white;
  }
.width50 {
  width: 50%;
}
.width100 {
  width: 100%;
}
.max-height50 {
  max-height: 50%;
}
.text-center {
  text-align: center;
}
.media {
  height: 300px;
}
.move-down30m {
  margin: 0px 0px 30px 0px;
}
`;

export default GlobalStyle;
