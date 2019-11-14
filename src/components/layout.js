/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

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
        <Grid container>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
