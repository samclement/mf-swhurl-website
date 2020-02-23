import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body { font-family: Helvetica, Arial, sans-serif; }
  .touch { -webkit-overflow-scrolling: touch; }
  .no-scroll { position: fixed; }
`

export default GlobalStyle
