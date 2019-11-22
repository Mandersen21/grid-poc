import React from "react"
import styled from "@emotion/styled"
import Container from "./container"
import Column from "./column"

import './viewport.css'

const Box = styled.div`
  height: 100px;
  background-color: #efefef;
  display: flex;
  font-size: 16px;
  font-family: 'DFDS';
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {

  return (
    <>
      <Container>
        <Column m={6}>
          <Box>First container - 1</Box>
        </Column>
        <Column m={6}>
          <Box>First container - 2</Box>
        </Column>
        <Column m={6}>
          <Box>First container - 3</Box>
        </Column>
        <Column m={6}>
          <Box>First container - 4</Box>
        </Column>
      </Container>

      <Container>
        <Column m={12}>
          <Box>Second container - 1</Box>
        </Column>
        <Column m={12}>
          <Box>Second container - 2</Box>
        </Column>
      </Container>

      <div className="viewport-viewer">
        <div className="xxl hidden">Viewport: XXL</div>
        <div className="xl hidden">Viewport: XL</div>
        <div className="l hidden">Viewport: L</div>
        <div className="s hidden">Viewport: S</div>
        <div className="m hidden">Viewport: M</div>
      </div>
    </>
  )
}

export default Layout
