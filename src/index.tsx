import React from "react"
import { ApolloProvider } from "react-apollo"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import client from "./apollo"
import App from "./Components/App"
import { GlobalStyle } from "./GlobalStyle"

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)
