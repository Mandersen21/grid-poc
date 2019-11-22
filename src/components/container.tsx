import React, { useState } from "react"

import { Container as Container_, Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme, createStyles } from "@material-ui/core/styles"
import styled from "@emotion/styled"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import useMedia from "./useMedia"

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

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
    breakpoints: { values: breakPointValues },

    overrides: ({
        MuiContainer: ({
            root: {
            },
            maxWidthMd: ({
                [breakpoints.down('md')]: {
                    maxWidth: "none"
                }
            }),
            maxWidthLg: ({
                [breakpoints.up('lg')]: {
                    maxWidth: "1200px"
                }
            }),
        })
    })
})

const Container = (props: Props) => {
    const { maxWidth_ } = useMedia(
        ['(max-width: 1279px)',
            '(min-width: 1280px)'],
        [
            { maxWidth_: "md" }, // Medium
            { maxWidth_: "lg" }, // X-large and up
        ],
        { maxWidth_: "xl" },
    )

    return (
        <MuiThemeProvider theme={theme}>
            <Container_  {...props.fluid ? { maxWidth: false } : { maxWidth: maxWidth_ }}>
                <Grid container spacing={6}>
                    {props.children}
                </Grid>
            </Container_>
        </MuiThemeProvider>
    )
}

export default Container