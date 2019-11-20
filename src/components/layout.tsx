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
      <Container fluid={false}>
        <Column>
          <Box>1</Box>
        </Column>
        <Column>
          <Box>2</Box>
        </Column>
        <Column>
          <Box>3</Box>
        </Column>
        <Column>
          <Box>4</Box>
        </Column>
        <Column>
          <Box>5</Box>
        </Column>
        <Column>
          <Box>6</Box>
        </Column>
        <Column>
          <Box>7</Box>
        </Column>
        <Column>
          <Box>8</Box>
        </Column>
        <Column>
          <Box>9</Box>
        </Column>
        <Column>
          <Box>10</Box>
        </Column>
        <Column>
          <Box>11</Box>
        </Column>
        <Column>
          <Box>12</Box>
        </Column>
        <Column>
          <Box>13</Box>
        </Column>
      </Container>

      <Container fluid={true}>
        <Column>
          <Box>1</Box>
        </Column>
        <Column>
          <Box>2</Box>
        </Column>
        <Column>
          <Box>3</Box>
        </Column>
        <Column>
          <Box>4</Box>
        </Column>
        <Column>
          <Box>5</Box>
        </Column>
        <Column>
          <Box>6</Box>
        </Column>
        <Column>
          <Box>7</Box>
        </Column>
        <Column>
          <Box>8</Box>
        </Column>
        <Column>
          <Box>9</Box>
        </Column>
        <Column>
          <Box>10</Box>
        </Column>
        <Column>
          <Box>11</Box>
        </Column>
        <Column>
          <Box>12</Box>
        </Column>
        <Column>
          <Box>13</Box>
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
