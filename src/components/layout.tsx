import React from "react"
import styled from "@emotion/styled"
import Container from "./container"
import Column from "./column"

const Box = styled.div`
  height: 100px;
  background-color: #efefef;
  border: dotted 1.5px black;
`

const Layout = ({ children }) => {

  return (
    <>
      <Container>
        <Column m={12}>
          <Box></Box>
        </Column>
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
    </>
  )
}

export default Layout
