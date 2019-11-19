import React from "react"
import { Container, Grid } from "@material-ui/core"
import styled from "@emotion/styled"

const Box = styled.div`
  height: 100px;
  background-color: #efefef;
  border: dotted 1.5px black;
`

const MaterialGridPage = () => {
    
    let xSmall: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | boolean | 'auto' = true

    return (
    <>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={xSmall}>
                    <Box>1</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>2</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>3</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>4</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>5</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>6</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>7</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>8</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>9</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>10</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>11</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>12</Box>
                </Grid>
                <Grid item xs={xSmall}>
                    <Box>13</Box>
                </Grid>
            </Grid>
        </Container>
    </>
    )
}

export default MaterialGridPage