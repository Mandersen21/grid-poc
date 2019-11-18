import React from "react"
import styled from "@emotion/styled"
import Container from "./container"
import Column from "./column"

import './viewport.css'

const Box = styled.div`
  height: 100px;
  background-color: #efefef;
  border: dotted 1.5px black;
`

const Layout = ({ children }) => {

  return (
    <>
      <Container>
        <Column>
          <Box></Box>
        </Column>
        <Column>
          <Box></Box>
        </Column>
        <Column>
          <Box></Box>
        </Column>
      </Container>
      <Container>
      <Column m={10}>
          <Box></Box>
        </Column>
        <Column>
          <Box></Box>
        </Column>
      </Container>

      <div className="viewport-viewer">
      <p>
      <div className="xxl hidden">Viewport: XXL</div>
        <div className="xl hidden">Viewport: XL</div>
        <div className="l hidden">Viewport: L</div>
        <div className="s hidden">Viewport: S</div>
        <div className="m hidden">Viewport: M</div>
      </p>
    </div>
    </>
  )
}

export default Layout
