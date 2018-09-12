import React from 'react'
import Home from './src/components/Home'
import styled from 'styled-components'
import { colors } from './src/theme'
import StatusBar from './src/components/StatusBar'

const Root = styled.View`
  flex: 1;
  background-color: ${colors.light};
`

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <StatusBar />
        <Home />
      </Root>
    )
  }
}
