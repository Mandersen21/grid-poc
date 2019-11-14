/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

const Box = styled.div`
  height: 100px;
  background-color: #efefef;
`

const Layout = ({ children }) => {

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Box></Box>
          </Grid>
          <Grid item sm={4}>
            <Box></Box>
          </Grid>
          <Grid item sm={4}>
            <Box></Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Layout
