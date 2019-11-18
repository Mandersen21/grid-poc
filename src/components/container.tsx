import React from "react"

import { Container as Container_, Grid } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

type Props = {
    children?: React.ReactNode
    fluid?: boolean
}

const breakPointValues = {
    xs: 0,
    sm: 768, // medium
    md: 1025, // large
    lg: 1280, // x-large
    xl: 1360, // xx-large
}

const theme = createMuiTheme({
    breakpoints: { values: breakPointValues }
})

const Container = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Container_ {...props.fluid ? { maxWidth: false } : { fixed: true }}>
                <Grid container>
                    {props.children}
                </Grid>
            </Container_>
        </ThemeProvider>
    )
}

export default Container